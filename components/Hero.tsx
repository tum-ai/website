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
      <div className=" container relative mx-auto max-w-2xl p-8 py-48 text-center text-white">
        <h1 className="mb-4 text-6xl font-bold leading-tight tracking-tight">
          {title}
        </h1>
        <p className="text-xl">{subtitle}</p>
      </div>
    </section>
  );
}
