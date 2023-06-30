import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";

const styles = cva("relative p-8 md:p-16", {
  variants: {
    background: {
      white: "",
      inverted: "bg-gradient-to-b from-blue-600 to-blue-700 p-8 text-white",
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
          style={{
            objectFit: "cover",
          }}
          alt="Hero background image"
          fill
          className="absolute -z-10"
        />
      )}
      <div className="container mx-auto">{children}</div>
    </section>
  );
}
