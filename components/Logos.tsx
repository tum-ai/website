import Image from "next/image";
import Link from "next/link";
import Section from "./ui/Section";

export interface Props {
  logos: {
    src: string;
    alt: string;
    href: string;
  }[];
}

export default function Logos({ logos }: Props) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        {logos.map((logo) => (
          <div
            className="h-32 border px-4 py-2 grayscale transition-all duration-200 ease-out hover:shadow-md 
            hover:shadow-purple-800/5 hover:grayscale-0 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            key={logo.src}
          >
            <Link href={logo.href} passHref>
              <div className="min-w-160 flex h-full items-center justify-center p-8">
                <Image
                  src={logo.src}
                  alt={logo.alt || ""}
                  width={160}
                  height={50}
                  objectFit="contain"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
