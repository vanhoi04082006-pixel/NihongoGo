#!/usr/bin/env python3
"""
Double-fork daemonize helper for the NihongoGo sandbox.

Why this exists:
  The sandbox reaps the entire process tree spawned by a shell command as soon
  as that command ends. Plain `nohup ... &` or `setsid` does NOT survive.
  A double-fork daemon (fork -> setsid -> fork -> exec) is reparented to PID 1
  before the sweep happens, which lets it survive — this is the same mechanism
  the agent-browser daemon uses.

Usage:
  python3 scripts/dev-daemon.py <logfile> <workdir> <command> [args...]

Example (start the Next.js dev server persistently):
  python3 scripts/dev-daemon.py dev.log /home/z/my-project bun run dev

Check it is running:
  ss -tlnp | grep :3000
"""
import os
import sys


def daemonize_and_exec(argv: list[str], cwd: str, logfile: str) -> None:
    # First fork: parent exits immediately so the child is adopted and can
    # never be a process-group leader reaped by the caller.
    pid = os.fork()
    if pid > 0:
        os._exit(0)

    # New session, detached from any controlling terminal.
    os.setsid()

    # Second fork: the intermediate parent exits, the grandchild is
    # reparented to init (PID 1) and can never re-acquire a terminal.
    pid2 = os.fork()
    if pid2 > 0:
        os._exit(0)

    os.chdir(cwd)
    os.umask(0o022)

    # Redirect stdio: stdin from /dev/null, stdout/stderr appended to logfile.
    devnull = os.open(os.devnull, os.O_RDONLY)
    os.dup2(devnull, 0)
    fd = os.open(logfile, os.O_WRONLY | os.O_CREAT | os.O_APPEND, 0o644)
    os.dup2(fd, 1)
    os.dup2(fd, 2)

    os.execvp(argv[0], argv)

    # execvp only returns on failure.
    os._exit(127)


def main() -> None:
    if len(sys.argv) < 4:
        print(__doc__)
        sys.exit(2)
    logfile, cwd = sys.argv[1], sys.argv[2]
    argv = sys.argv[3:]
    daemonize_and_exec(argv, cwd, logfile)


if __name__ == "__main__":
    main()
