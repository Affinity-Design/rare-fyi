import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[14px] text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-gold-primary to-gold-dark text-black shadow-gold hover:shadow-gold-hover hover:-translate-y-0.5",
        destructive:
          "bg-red-600 text-white shadow-md hover:bg-red-700",
        outline:
          "border border-white/20 bg-transparent text-white hover:bg-white/5 hover:border-gold-primary/40",
        secondary:
          "bg-white/10 text-white hover:bg-white/20",
        ghost:
          "bg-white/3 backdrop-blur-2xl border border-white/8 text-white hover:bg-white/8 hover:border-gold-primary/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]",
        link:
          "text-gold-primary underline-offset-4 hover:underline",
        gold:
          "bg-gradient-to-b from-gold-primary to-gold-dark text-black shadow-gold hover:shadow-gold-hover hover:-translate-y-0.5 active:translate-y-0",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-[10px] px-4",
        lg: "h-12 rounded-[16px] px-8",
        xl: "h-14 rounded-[16px] px-10 text-base",
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
