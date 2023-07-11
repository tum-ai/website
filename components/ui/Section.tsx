import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";

const styles = cva("relative p-8 sm:py-16 lg:py-32", {
  variants: {
    background: {
      white: "",
      inverted: "bg-gradient-to-b from-blue-700 to-blue-800 text-white",
    },
  },
  defaultVariants: {
    background: "white",
  },
});

export interface Props extends VariantProps<typeof styles> {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}

export default function Section({
  background,
  children,
  backgroundImage,
  className,
}: Props) {
  return (
    <section className={styles({ background, className: className })}>
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Hero background image"
          fill
          className="absolute -z-10 object-cover"
        />
      )}
      <div className="container mx-auto">{children}</div>
    </section>
  );
}
