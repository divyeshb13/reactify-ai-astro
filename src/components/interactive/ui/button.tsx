/* ================== START: Imports ================== */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/functions";
/* ================== END: Imports ================== */

/* ================== START: Variants ================== */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none ring-none focus-visible:ring-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105",
        hero: "bg-primary text-white border-0 hover:scale-105 shadow-lg hover:shadow-xl font-semibold",
        glass:
          "relative isolate overflow-hidden text-foreground px-10 py-7 rounded-lg font-medium bg-primary/5 backdrop-blur-xl border border-primary/20 border-primary-foreground/20 transition-all duration-500  hover-border-1",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
/* ================== END: Variants ================== */

/* ================== START: Types ================== */
export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
/* ================== END: Types ================== */

/* ================== START: Component ================== */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
/* ================== END: Component ================== */

/* ================== START: Export ================== */
export { Button };
/* ================== END: Export ================== */
