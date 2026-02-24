import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9D00FF]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-[#9D00FF] to-[#7A00CC] text-white shadow-lg shadow-[#9D00FF]/30 hover:shadow-[#9D00FF]/50 hover:-translate-y-0.5 active:translate-y-0",
        destructive:
          "bg-red-600 text-white shadow-md hover:bg-red-700",
        outline:
          "border border-white/20 bg-transparent text-white hover:bg-white/5 hover:border-[#9D00FF]/40",
        secondary:
          "bg-white/10 text-white hover:bg-white/20",
        ghost:
          "bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-[#9D00FF]/30",
        link:
          "text-[#9D00FF] underline-offset-4 hover:underline",
        purple:
          "bg-gradient-to-r from-[#9D00FF] to-[#E91E63] text-white shadow-lg shadow-[#9D00FF]/30 hover:shadow-xl hover:shadow-[#9D00FF]/40 hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg",
        gold:
          "bg-gradient-to-b from-[#9D00FF] to-[#7A00CC] text-white shadow-lg shadow-[#9D00FF]/30 hover:shadow-xl hover:shadow-[#9D00FF]/40 hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8",
        xl: "h-14 rounded-xl px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
