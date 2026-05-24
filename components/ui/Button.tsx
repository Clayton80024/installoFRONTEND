"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

type Variant = "primary" | "ghost" | "outline" | "white";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-[0_2px_8px_rgba(37,99,235,.25)]",
  ghost:
    "bg-transparent text-[#2563EB] hover:bg-[#EFF6FF]",
  outline:
    "border border-white/60 text-white hover:bg-white/10 backdrop-blur-sm",
  white:
    "bg-white text-[#2563EB] hover:bg-blue-50 shadow-[0_2px_8px_rgba(0,0,0,.1)]",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        className={`inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-150 cursor-pointer select-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
