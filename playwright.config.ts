import { defineConfig, devices } from '@playwright/test'

/**
 * NihongoGo — E2E (Playwright)
 * Chạy: bunx playwright test (hoặc bun run test:e2e)
 *
 * Dev server phải chạy ở :3000 — nếu chưa có, Playwright tự khởi động bằng
 * `bun run dev` (webServer). Trong CI dùng `reuseExistingServer: !process.env.CI`.
 * Lưu ý: lần chạy dev đầu tiên có thể tự setup database (predev) — predev đã
 * idempotent nên an toàn khi chạy lại.
 */
export default defineConfig({
  testDir: './tests/e2e',
  // *.e2e.ts — tránh trùng glob của `bun test` (mặc định nhặt *.spec.ts)
  testMatch: '**/*.e2e.ts',
  timeout: 240_000,
  expect: { timeout: 20_000 },
  fullyParallel: false, // E2E dùng chung 1 DB + 1 user flow — chạy tuần tự
  workers: 1,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['list']] : [['list']],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 20_000,
    // Tiếng Nhật + tiếng Việt cần font đầy đủ trong headless
    locale: 'vi-VN',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'bun run dev',
    url: 'http://localhost:3000/api/health/live',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
})
