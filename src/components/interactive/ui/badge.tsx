/* ================== START: Imports ================== */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/functions";
/* ================== END: Imports ================== */

/* ================== START: Variants ================== */
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
/* ================== END: Variants ================== */

/* ================== START: Types ================== */
export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}
/* ================== END: Types ================== */

/* ================== START: Component ================== */
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
/* ================== END: Component ================== */

/* ================== START: Export ================== */
export { Badge };
/* ================== END: Export ================== */
