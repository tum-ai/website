import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import Button from "components/ui/Button";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  detailLink?: string;
  instagramLink?: string;
  linkedinLink?: string;
  slackLink?: string;
  className?: string; // Add className to CardProps
}

export default function Card({
  imageSrc,
  title,
  description,
  detailLink,
  instagramLink,
  linkedinLink,
  slackLink,
  className, // Destructure className
}: CardProps) {
  // Encode the title to be URL-safe
  const dlink = detailLink ?? "";

  return (
    <div className={className}>
      <div
        className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-lg border border-gray-200 bg-white ${className}`}
      >
        <div className="flex h-full flex-col p-5">
          <div>
            <h5 className="text-μ font-bold tracking-tight text-gray-900 dark:text-black">
              {title}
            </h5>
            <Image
              src={imageSrc}
              alt={title}
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>
          <div className="grow">
            <p className="text-μ font-bold tracking-tight text-gray-900 dark:text-black">
              {description}
            </p>
          </div>
          <div className="h-2"></div>
          <div className="mt-auto flex items-center justify-end space-x-3">
            <Button asChild>
              <Link href={dlink}>Details</Link>
            </Button>
            {instagramLink && (
              <Link href={instagramLink} passHref>
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="xl"
                  className="text-black duration-500 hover:text-purple-300"
                />
              </Link>
            )}

            {linkedinLink && (
              <Link href={linkedinLink} passHref>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="xl"
                  className="text-black duration-500 hover:text-purple-300"
                />
              </Link>
            )}

            {slackLink && (
              <Link href={slackLink} passHref>
                <FontAwesomeIcon
                  icon={faSlack}
                  size="xl"
                  className="text-black duration-500 hover:text-purple-300"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
