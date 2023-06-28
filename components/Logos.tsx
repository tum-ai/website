import Image from "next/image";
import Link from "next/link";
import Section from "./ui/Section";

export interface Props {
    title?: string,
    data: {
        "src": string,
        "alt": string,
        "href": string,
    }[]
}

export default function Logos({ title, data }: Props) {
  return (
    <Section>
        {title && <h2 className="text-2xl text-center font-bold flex items-center justify-center lg:space-x-6"><div className="h-1 w-32 border-t hidden lg:block border-black"></div> <span>{title}</span> <div className="h-1 w-32 border-t hidden lg:block border-black"></div></h2>}
        <div className="flex flex-wrap items-center justify-center">
            {data.map((object, index) => (
            <div
                className="px-4 py-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                key={index}
            >
                <Link href={object.href} passHref>
                <div
                    className="min-w-160 flex h-full items-center justify-center p-8 grayscale 
                        transition-all duration-200 ease-out hover:shadow-md hover:shadow-purple-800/5 hover:grayscale-0"
                >
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
