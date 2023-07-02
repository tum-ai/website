import { bitter } from "@styles/fonts";
import { cx } from "class-variance-authority";
import Image from "next/image";
import React from "react";

export default function Hero({ imageSrc, title, subtitle }) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={imageSrc}
        alt="Hero background image"
        fill
        className="absolute -z-10 scale-110 object-cover blur-sm brightness-50 saturate-50"
      />
      <div className="container relative mx-auto flex min-h-[80vh] max-w-4xl flex-col justify-center p-8 text-white md:p-16">
        <h1 className={cx("mb-4 text-6xl font-medium", bitter.className)}>
          {title}
        </h1>
        <p className="text-xl">{subtitle}</p>
      </div>
    </section>
  );
}
