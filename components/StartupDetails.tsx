"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Person from "@components/Person";
import { Startup } from "@data/e-lab-startups";
import SocialMediaLinks from "@components/SocialMediaLinks";

const StartupDetails = ({ startup }: { startup: Startup }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="min-h-screen bg-purple-950 p-8 pt-16 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center">
          <div className="flex items-center">
            <h1 className="mr-4 text-4xl font-bold">{startup.name}</h1>
            {!imageError && (
              <Image
                src={startup.logo}
                alt={`${startup.name} logo`}
                width={100}
                height={100}
                onError={() => setImageError(true)}
              />
            )}
          </div>

          <div className="mt-4 flex flex-row sm:mt-0 sm:ml-4 sm:border-l sm:border-gray-300 sm:pl-4">
            <h2 className="sr-only">Social Media Links</h2>
            {startup.socialMedia && (
              <div className="flex space-x-4">
                <SocialMediaLinks
                  socialMedia={startup.socialMedia}
                  iconClassNames={"duration-500 hover:text-yellow-500"}
                />
              </div>
            )}
          </div>
        </div>

        <p className="mb-8 text-xl">{startup.description}</p>

        <h2 className="mb-4 text-2xl font-semibold">Metrics</h2>
        <ul className="mb-8">
          {Object.entries(startup.metrics).map(([key, value]) => (
            <li key={key} className="mb-2">
              <span className="font-bold">{key}:</span> {String(value)}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 text-2xl font-semibold">About {startup.name}</h2>
        <p className="mb-8">{startup.about}</p>

        <h2 className="mb-4 text-2xl font-semibold">Founders</h2>
        <div className="mb-8 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
          {startup.founders?.map((person) => (
            <Person person={person} key={person.id} />
          ))}
        </div>

        <Link
          href={startup.website}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-yellow-500 px-4 py-2 font-semibold text-black transition-colors hover:bg-yellow-600"
        >
          Visit Website
        </Link>
      </div>
    </div>
  );
};

export default StartupDetails;
