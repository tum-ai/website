import type { Person as PersonType } from "data/e-lab";
import Image from "next/image";
import SocialMediaLinks from "@components/SocialMediaLinks";

interface PersonProps {
  person: PersonType;
}

export default function Person({ person }: PersonProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-800/30 bg-purple-900/80 backdrop-blur-lg transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="aspect-w-3 aspect-h-4 sm:aspect-none sm:h-96">
        <Image
          src={person.imgSrc}
          width={0}
          height={0}
          sizes="100vw"
          alt={person.imgAlt}
          className="h-full w-full object-cover object-center transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80"></div>
      </div>
      <div className="relative z-10 flex flex-1 flex-col space-y-2 p-5">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <div>
            <h3 className="text-base font-medium text-white">
              {person.firstName} {person.lastName}
            </h3>
            <p className="mt-1 text-sm text-gray-400">{person.role}</p>
          </div>
          <div className="mt-3 space-x-5 xl:mt-0">
            <SocialMediaLinks
              socialMedia={person.socialMedia}
              iconClassNames={
                "text-gray-400 transition-colors duration-300 hover:text-purple-400"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
