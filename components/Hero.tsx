import { bitter } from "@styles/fonts";
import { cx } from "class-variance-authority";
import Image from "next/image";
import React from "react";

interface Props {
  imageSrc: string;
  title: string;
  subtitle?: string;
}

export default function Hero({ imageSrc, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Enhanced Effects */}
      <Image
        src={imageSrc}
        alt="Hero background image"
        fill
        className="absolute -z-10 scale-110 object-cover transition-transform duration-700 hover:scale-105"
        priority
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/80 via-black/60 to-black/80" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />

      {/* Content Container */}
      <div className="relative container mx-auto flex min-h-[80vh] max-w-4xl flex-col justify-center p-8 text-white md:p-16">
        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 h-32 w-1 -translate-y-1/2 bg-linear-to-b from-blue-500 to-purple-500 opacity-50" />

        {/* Main Content */}
        <div className="space-y-6">
          <h1
            className={cx(
              "text-6xl font-medium tracking-tight md:text-7xl",
              "bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent",
              "animate-fade-in-up",
              bitter.className,
            )}
          >
            {title}
          </h1>
          {!!subtitle && (
            <p className="animate-fade-in-up text-xl text-gray-300 [animation-delay:200ms]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
