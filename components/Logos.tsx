import Image from "next/image";
import Link from "next/link";
import Section from "./ui/Section";

export interface Props {
  title?: string | React.ReactNode;
  data: {
    src: string;
    alt: string;
    href: string;
  }[];
}

export default function Logos({ title, data }: Props) {
  return (
    <Section>
      {title && (
        <h2 className="flex items-center justify-center text-center text-2xl font-bold lg:space-x-6">
          <div className="hidden h-1 w-32 border-t border-black lg:block"></div>{" "}
          <span>{title}</span>{" "}
          <div className="hidden h-1 w-32 border-t border-black lg:block"></div>
        </h2>
      )}
      <br />
      <div className="flex flex-wrap items-center justify-center">
        {data.map((object, index) => (
          <div
            className="h-32 border px-4 py-2 grayscale transition-all duration-200 ease-out hover:shadow-md 
            hover:shadow-purple-800/5 hover:grayscale-0 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            key={object["src"]}
          >
            <Link href={object.href} passHref>
              <div className="min-w-160 flex h-full items-center justify-center p-8">
                <Image
                  src={object.src}
                  alt={object.alt || ""}
                  width={160}
                  height={50}
                  objectFit="contain"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
