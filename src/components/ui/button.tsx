import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default:
                    "bg-foreground text-background shadow hover:bg-foreground/90",
                destructive:
                    "bg-red-500 text-white shadow-sm hover:bg-red-500/90",
                outline:
                    "border border-border bg-background shadow-sm hover:bg-accent hover:text-white",
                secondary:
                    "bg-accent text-white shadow-sm hover:bg-accent/80",
                ghost: "hover:bg-accent/10 hover:text-accent",
                link: "text-foreground underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-4 py-2 md:h-11 md:px-6 md:py-3 text-sm md:text-base",
                sm: "h-8 rounded-md px-3 text-xs md:text-sm",
                lg: "h-10 rounded-md px-8 md:h-14 md:px-10 text-base md:text-lg",
                icon: "h-9 w-9 md:h-11 md:w-11",
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
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
