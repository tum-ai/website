import Link from "next/link";
import { Person } from "@data/e-lab";
import Image from "next/image";
import SocialMediaLinks from "@components/SocialMediaLinks";

interface PersonProps {
  person: Person;
}

export default function Person({ person }: PersonProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <Link href={`/e-lab/${person.id}`}>
        <div className="aspect-w-3 aspect-h-4 sm:aspect-none bg-gray-200 group-hover:opacity-75 sm:h-96">
          <Image
            src={person?.imgSrc}
            width={0}
            height={0}
            sizes="100vw"
            alt={person?.imgAlt}
            className="h-full w-full object-cover object-center sm:h-full sm:w-full"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <div>
            <h3 className="text-m font-medium text-gray-900">
              {person.firstName} {person.lastName}
            </h3>
            <p className="text-sm text-gray-500">{person.role}</p>
          </div>
          <div className="mt-2 space-x-4 xl:mt-0">
            <SocialMediaLinks
              socialMedia={person.socialMedia}
              iconClassNames={"text-black duration-500 hover:text-purple-300"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
