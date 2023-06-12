import Image from "next/image";

export default function Hero({ imageSrc, title, subtitle }) {
  return (
    <div className="relative flex h-96 flex-col-reverse">
      <Image
        src={imageSrc}
        style={{
          objectFit: "cover",
        }}
        alt="Hero background image"
        fill
        className="absolute -z-10"
      />
      <div className="bottom container relative mx-auto space-y-4 p-8 font-bold md:py-16">
        <h1 className="w-fit bg-white/80 p-2 text-4xl">{title}</h1>
        <p className="w-fit bg-white/80 p-2 text-xl">{subtitle}</p>
      </div>
    </div>
  );
}
