import React, { ComponentPropsWithRef } from "react";
import { VariantProps, cva } from "class-variance-authority";

const styles = cva("rounded-full px-8 py-2 font-bold duration-500", {
  variants: {
    intent: {
      purple: "bg-purple-500 hover:bg-purple-400",
    },
  },
  defaultVariants: {
    intent: "purple",
  },
});

export interface Props
  extends VariantProps<typeof styles>,
    ComponentPropsWithRef<"button"> {
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  intent,
  children,
  className,
  ...props
}: Props) {
  return (
    <button className={styles({ intent, className: className })} {...props}>
      {children}
    </button>
  );
}
