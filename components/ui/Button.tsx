import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentPropsWithRef } from "react";
import { Slot } from "@radix-ui/react-slot";

const styles = cva("rounded-full font-bold duration-500 inline-block", {
  variants: {
    intent: {
      primary:
        "border-4 border-purple-500 text-white bg-purple-500 hover:bg-purple-400 hover:border-purple-400",
      secondary:
        "border-4 border-purple-500 text-purple-500 hover:border-purple-400 hover:text-purple-400",
      tertiary:
        "border-4 border-transparent text-purple-500 hover:text-purple-400",
    },
    small: {
      true: "py-1 px-2",
      false: "px-8 py-2 ",
    },
  },
  defaultVariants: {
    intent: "primary",
    small: false,
  },
});

export interface Props
  extends VariantProps<typeof styles>,
    ComponentPropsWithRef<"button"> {
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;
}

export default function Button({
  intent,
  small,
  children,
  className,
  asChild,
  ...props
}: Props) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={styles({ intent, small, className: className })}
      {...props}
    >
      {children}
    </Comp>
  );
}
