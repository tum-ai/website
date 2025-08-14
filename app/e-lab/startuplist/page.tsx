import type { Metadata } from "next";
import { archivoSemiExpandedBold } from "../../../styles/fonts";
import Section from "@components/ui/Section";
import Link from "next/link";
import StartupList from "@components/ELabStartupList";
import { startups } from "data/e-lab-startups";

// Define the metadata for the page
export const metadata: Metadata = {
  title: "E-Lab Startup Directory",
  description: "Registry of all E-Lab based Startups.",
};

export default function Page() {
  return (
    <>
      {/* Hidden Title for Accessibility */}
      <h1 className="hidden">E-Lab Startup Directory | List of Startups</h1>

      {/* Header Section */}
      <Section className="bg-purple-950 text-white">
        <div className="md:w-3/5 lg:mb-8">
          <h2 className={`bg-linear-to-r from-yellow-500 to-red-500 bg-clip-text text-5xl font-semibold text-transparent uppercase ${archivoSemiExpandedBold.className}`}>
            E-Lab Startup Directory
          </h2>
          <p className="mt-2 text-lg">Registry of all E-Lab based Startups.</p>
        </div>
      </Section>

      {/* Main Content Section */}
      <Section className="bg-purple-950 pt-0 text-white">
        <p className={`mb-8 text-center text-4xl ${archivoSemiExpandedBold.className}`}>
          Since <span className="text-yellow-500">2022</span>, we have founded{" "}
          <span className="text-yellow-500">16 startups</span> within the{" "}
          <span className="text-yellow-500">E-LAB</span>
        </p>
        <div className="flex flex-col gap-8 lg:px-24 xl:px-44">
          <p className="px-8 text-center">
            We are proud to present the startups that have emerged from the AI
            E-Lab program. Each of them has a unique story and a vision to
            change the world with their AI-based solutions. We invite you to
            explore the startups and their founders, get inspired by their
            innovative ideas, and discover exciting job opportunities available
            with these pioneering companies.
          </p>
        </div>
        <ul style={{ marginTop: "20px" }}></ul>
        <StartupList startups={startups} />
      </Section>

      {/* Back Link Section */}
      <Section className="bg-purple-950 text-center text-white">
        <Link
          className="rounded-full border-2 border-yellow-500 p-4 text-center font-bold text-yellow-500"
          href="/e-lab"
        >
          Back to the AI E-LAB
        </Link>
      </Section>
    </>
  );
}
