import Image from "next/image";
import Link from "next/link";

export interface Props {
  logos: {
    src: string;
    alt: string;
    href: string;
    width: number;
  }[];
}

export default function Logos({ logos }: Props) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center space-y-4">
        {logos.map((logo) => (
          <div
            className="h-32 w-full py-2 grayscale transition-all duration-200 ease-out hover:grayscale-0 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            key={logo.src}
          >
            <Link href={logo.href} passHref>
              <div
                className={`min-w-160 flex h-full items-center justify-center ${
                  logo.width > 200 ? "" : "p-8"
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt || ""}
                  width={logo.width}
                  height={50}
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
