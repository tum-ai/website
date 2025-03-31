import Image from "next/image";
import Link from "next/link";

export interface LogosProps {
  logos: {
    src: string;
    alt: string;
    href: string;
    width?: number;
  }[];
}

export default function Logos({ logos }: LogosProps) {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-2 items-center gap-x-10 gap-y-12 sm:grid-cols-3 sm:gap-x-12 sm:gap-y-14 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-16">
          {logos.map((logo) => (
            <Link
              href={logo.href}
              passHref
              target="_blank"
              key={logo.src}
              className="col-span-1 flex justify-center py-2 grayscale transition-all duration-300 ease-out hover:grayscale-0"
            >
              <div className="flex h-14 items-center justify-center px-4">
                <Image
                  src={logo.src}
                  alt={logo.alt || ""}
                  width={logo.width ?? 160}
                  height={50}
                  className="max-h-14 w-full object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
