/* ================== START: Imports ================== */
import * as React from "react";
import { cn } from "@/utils/functions";
/* ================== END: Imports ================== */

/* ================== START: Types ================== */
interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  error?: string;
}
/* ================== END: Types ================== */

/* ================== START: Component ================== */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, id, ...props }, ref) => {
    const inputId = id || props.name; // use id or name for accessibility

    return (
      <div className="flex flex-col gap-2">
        {/* ===== Label ===== */}
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium">
            {label}
          </label>
        )}
        {/* ===== Input Field ===== */}
        <input
          id={inputId}
          type={type}
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-xl bg-background/50 border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all",
            error ? "border-destructive" : "border-border",
            className,
          )}
          {...props}
        />
        {/* ===== Error Message ===== */}
        {error && <p className="text-destructive text-sm">{error}</p>}
      </div>
    );
  },
);
Input.displayName = "Input";
/* ================== END: Component ================== */

/* ================== START: Export ================== */
export { Input };
/* ================== END: Export ================== */
