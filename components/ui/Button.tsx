import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentPropsWithRef } from "react";
import { Slot } from '@radix-ui/react-slot'

const styles = cva("rounded-full px-8 py-2 font-bold duration-500 inline-block", {
  variants: {
    intent: {
      purple: "bg-purple-500 hover:bg-purple-400 text-white",
      primary: "border-4 border-purple-500 text-white bg-purple-500 hover:bg-purple-400 hover:border-purple-400",
      secondary: "border-4 border-purple-500 text-purple-500 hover:bg-purple-100",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

export interface Props
  extends VariantProps<typeof styles>,
  ComponentPropsWithRef<"button"> {
  className?: string;
  children: React.ReactNode;
  asChild?: boolean
}

export default function Button({
  intent,
  children,
  className,
  asChild,
  ...props
}: Props) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className={styles({ intent, className: className })} {...props}>
      {children}
    </Comp>
  );
}
