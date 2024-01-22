"use client";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative h-screen bg-purple-950">
      <video muted autoPlay loop playsInline className="h-full w-full">
        <source src="/assets/e-lab/spheretumai.mp4" />
      </video>

      <div className="absolute top-0 flex h-full w-full items-center text-white">
        <div className="max-w-8xl mx-auto space-y-6 p-8 md:p-16">
          <h1 className="text-center font-bold lg:text-left">
            <span className="text-8xl">AI</span>
            <br />
            <span className="text-3xl sm:text-5xl xl:text-8xl">
              Entrepreneurship Lab
            </span>
          </h1>

          <div className="flex flex-col items-center">
            <p className="mb-8 max-w-2xl text-center text-2xl font-bold">
              Join the AI E-Lab and unlock your potential to shape the future of
              technology
            </p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <Link
              className="min-w-[200px] max-w-lg rounded-full border-none bg-gradient-to-b from-yellow-500 to-red-500 p-4 text-center sm:min-w-[400px]"
              href="https://www.eventbrite.de/e/ai-e-lab-final-pitch-competition-tickets-784536669297?aff=oddtdtcreator"
            >
              Get your tickets for Final Pitch Event
            </Link>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-16 left-[50%] -translate-x-[50%]"
        onClick={() => window.scrollBy({ top: 500, behavior: "smooth" })}
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          size="2xl"
          className="animate-bounce text-white"
        />
      </button>
    </section>
  );
};
