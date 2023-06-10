import Image from "next/image";

export default function Header1({ imageSrc, title, subtitle }) {
  return (
    <div className="relative h-96 flex flex-col-reverse">
      <Image
        src={imageSrc}
        style={{
          objectFit: "cover",
        }}
        alt="Hero background image"
        fill
        className="absolute -z-10"
      />
      <div className="font-bold bottom relative container mx-auto p-8 md:py-16 space-y-4">
        <h1 className="text-4xl bg-white/80 w-fit p-2">{title}</h1>
        <p className="text-xl bg-white/80 w-fit p-2">{subtitle}</p>
      </div>
    </div>
  );
}
