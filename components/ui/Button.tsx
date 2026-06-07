import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[#1D6A54] text-white hover:bg-[#1D6A54]/90 rounded-xl": variant === "primary",
            "border-2 border-[#1D6A54] text-[#1D6A54] hover:bg-[#1D6A54]/10 rounded-xl bg-transparent": variant === "secondary",
            "text-[#1D6A54] hover:bg-[#1D6A54]/10 rounded-xl bg-transparent": variant === "ghost",
            "bg-[#25D366] text-white hover:bg-[#25D366]/90 rounded-xl": variant === "whatsapp",
            "h-12 px-6 py-2": size === "default",
            "h-9 px-3 rounded-lg": size === "sm",
            "h-14 px-8 rounded-xl text-base": size === "lg",
            "h-12 w-12": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
