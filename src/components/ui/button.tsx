import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Nút kiểu Duolingo: tròn trịa, đậm, viền dưới 3D lún xuống khi nhấn.
 * Biến màu dùng token theme; màu "mép" 3D tính bằng color-mix (xem globals.css).
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-extrabold tracking-wide select-none outline-none transition-[transform,box-shadow,filter,background-color,color] duration-100 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4.5 shrink-0 [&_svg]:shrink-0 focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "btn-3d btn-3d-primary bg-primary text-primary-foreground rounded-2xl uppercase",
        success:
          "btn-3d btn-3d-success bg-success text-success-foreground rounded-2xl uppercase",
        destructive:
          "btn-3d btn-3d-destructive bg-destructive text-white rounded-2xl uppercase dark:bg-destructive/60",
        warning:
          "btn-3d btn-3d-warning bg-warning text-warning-foreground rounded-2xl uppercase",
        sakura:
          "btn-3d btn-3d-sakura bg-sakura text-sakura-foreground rounded-2xl uppercase",
        outline:
          "btn-3d btn-3d-secondary bg-card text-foreground rounded-2xl border-2 border-border",
        secondary:
          "btn-3d btn-3d-secondary bg-secondary text-secondary-foreground rounded-2xl",
        ghost:
          "rounded-2xl hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 disabled:opacity-50",
        link: "text-primary underline-offset-4 hover:underline disabled:opacity-50",
      },
      size: {
        default: "h-11 px-5 text-sm",
        sm: "h-9 rounded-xl gap-1.5 px-3.5 text-xs has-[>svg]:px-2.5",
        lg: "h-12 rounded-2xl px-6 text-base has-[>svg]:px-5",
        xl: "h-14 rounded-2xl px-8 text-base",
        icon: "size-11 rounded-xl",
        "icon-sm": "size-9 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
