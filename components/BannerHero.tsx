import Image from "next/image";
import React from "react";

export default function Hero({ imageSrc, titleImageSrc, subtitle }) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        alt="Hero background image"
        className="absolute -z-10 scale-110 blur-sm brightness-50 saturate-50"
      />
      <div className="container relative mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center p-8 py-48 text-center text-white">
        <div className="mb-10">
          <Image
            src={titleImageSrc}
            alt="Title image"
            width={600}
            height={300}
            style={{
              filter:
                "invert(100%) sepia(0%) saturate(0%) hue-rotate(55deg) brightness(102%) contrast(101%)",
            }}
          />
        </div>
        <p className="text-2xl">{subtitle}</p>
      </div>
    </section>
  );
}
