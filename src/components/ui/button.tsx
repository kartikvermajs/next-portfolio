import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-bold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:-translate-y-[1px] active:translate-y-[0.5px]",
    {
        variants: {
            variant: {
                default:
                    "bg-accent text-white shadow-extruded hover:shadow-extruded-hover active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.3),inset_-3px_-3px_6px_rgba(255,255,255,0.2)]",
                destructive:
                    "bg-red-500 text-white shadow-extruded hover:shadow-extruded-hover active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.3),inset_-3px_-3px_6px_rgba(255,255,255,0.2)]",
                outline:
                    "bg-card text-foreground shadow-extruded-small hover:shadow-extruded active:shadow-inset-small",
                secondary:
                    "bg-card text-foreground shadow-extruded hover:shadow-extruded-hover active:shadow-inset",
                ghost: "hover:shadow-extruded-small active:shadow-inset-small hover:bg-card hover:text-foreground text-muted hover:-translate-y-0 active:translate-y-[0.5px]",
                link: "text-accent underline-offset-4 hover:underline hover:translate-y-0 active:translate-y-0",
            },
            size: {
                default: "h-12 px-6 py-3 text-base",
                sm: "h-10 px-4 text-sm rounded-xl",
                lg: "h-14 px-10 text-lg",
                icon: "h-12 w-12",
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
