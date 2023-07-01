import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import React, { ComponentPropsWithRef } from "react";

const styles = cva("rounded-full px-8 py-2 font-bold duration-500", {
  variants: {
    intent: {
      purple: "bg-purple-500 hover:bg-purple-400 text-white",
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
  link?: boolean;
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  intent,
  children,
  className,
  link,
  href,
  ...props
}: Props) {
  if (link) {
    return (
      <Link href={href}>
        <button className={styles({ intent, className: className })} {...props}>
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <button className={styles({ intent, className: className })} {...props}>
        {children}
      </button>
    );
  }
}
