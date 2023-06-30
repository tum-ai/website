import { bitter } from "@styles/fonts";
import { cx } from "class-variance-authority";
import Image from "next/image";
import React from "react";

export default function Hero({ imageSrc, title, subtitle }) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={imageSrc}
        style={{
          objectFit: "cover",
        }}
        alt="Hero background image"
        fill
        className="absolute -z-10 scale-110 blur-sm brightness-50 saturate-50"
      />
      <div className="container flex justify-center flex-col relative mx-auto max-w-4xl p-8 md:p-16 text-white min-h-[80vh]">
        <h1 className={cx("mb-4 text-6xl font-medium", bitter.className)}>
          {title}
        </h1>
        <p className="text-xl">{subtitle}</p>
      </div>
    </section>
  );
}
