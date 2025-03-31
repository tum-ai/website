import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentPropsWithRef } from "react";
import { Slot } from "@radix-ui/react-slot";

const styles = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      intent: {
        primary:
          "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 shadow-xs hover:shadow-md active:scale-[0.98]",
        secondary:
          "bg-white text-purple-600 border border-purple-200 hover:bg-purple-50 hover:border-purple-300 focus:ring-purple-500 shadow-xs hover:shadow-md active:scale-[0.98]",
        tertiary:
          "text-purple-600 hover:text-purple-700 hover:bg-purple-50 focus:ring-purple-500 active:scale-[0.98]",
        ghost:
          "text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500 active:scale-[0.98]",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-xs hover:shadow-md active:scale-[0.98]",
        glass:
          "bg-white/20 text-white backdrop-blur-sm border border-white/20 hover:bg-white/30 focus:ring-white active:scale-[0.98] shadow-sm hover:shadow-md",
        glassDark:
          "bg-black/10 text-white backdrop-blur-sm border border-white/20 hover:bg-black/20 focus:ring-white active:scale-[0.98] shadow-sm hover:shadow-md",
        glassLight:
          "bg-white/60 text-gray-800 backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 focus:ring-gray-300 active:scale-[0.98] shadow-sm hover:shadow-md",
        glassPurple:
          "bg-purple-600/10 text-purple-600 backdrop-blur-sm border border-purple-200/30 hover:bg-purple-600/20 focus:ring-purple-500 active:scale-[0.98] shadow-sm hover:shadow-md",
        glassBlue:
          "bg-blue-600/10 text-blue-600 backdrop-blur-sm border border-blue-200/30 hover:bg-blue-600/20 focus:ring-blue-500 active:scale-[0.98] shadow-sm hover:shadow-md",
        glassIndigo:
          "bg-indigo-600/10 text-indigo-600 backdrop-blur-sm border border-indigo-200/30 hover:bg-indigo-600/20 focus:ring-indigo-500 active:scale-[0.98] shadow-sm hover:shadow-md",
        pill: "rounded-full text-xs font-medium text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-500",
        pillGlass:
          "rounded-full text-xs font-medium text-purple-600 bg-purple-600/10 backdrop-blur-sm border border-purple-200/30 hover:bg-purple-600/20 focus:ring-purple-500 shadow-sm",
      },
      size: {
        xs: "h-7 px-2 text-xs",
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      fullWidth: false,
      rounded: "md",
    },
  },
);

export interface Props
  extends VariantProps<typeof styles>,
    ComponentPropsWithRef<"button"> {
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function Button({
  intent,
  size,
  fullWidth,
  rounded,
  children,
  className,
  asChild,
  ...props
}: Props) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={styles({ intent, size, fullWidth, rounded, className })}
      {...props}
    >
      {children}
    </Comp>
  );
}
