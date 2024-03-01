"use client";

import Section from "@components/ui/Section";
import { bitter } from "@styles/fonts";
import { cx } from "class-variance-authority";
import Image from "next/image";
import Button from "@components/ui/Button";

export const StudentsSection = () => {
  return (
    <Section className="flex animate-fadeIn justify-center">
      <div className="rounded-3xl sm:bg-gray-50 sm:p-14 sm:shadow-lg sm:shadow-blue-500/20">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-16">
          <div className="space-y-4">
            <h2 className={cx("mb-8 text-4xl font-semibold", bitter.className)}>
              Applications for Industry Phase 6.0 will open in spring
            </h2>
            <p>
              Push ML boundaries and progress your career with our AI projects!{" "}
              <span className="text-purple-600">Leverage your skills</span> and
              take on real AI projects to test your abilities. Join us now!
            </p>
            <p>
              Work in a{" "}
              <span className="text-purple-600">
                team of 4x students for 12 weeks, earn up to 4000€
              </span>{" "}
              and gain valuable contacts. With a project lead guiding you,
              demonstrate your agile project management skills in a professional
              setting.
            </p>
            <p>
              Collaborate with pre-selected partners, including{" "}
              <span className="textpurple-600">
                for-profit companies, startups, and non-profits,
              </span>{" "}
              in our upcoming Industry Phase 6.0 starting in April 2024.
            </p>
          </div>
          <div className="relative flex flex-col items-center space-y-8 text-center">
            <div className="shadowpurple-800/20 relative mb-3 w-full rounded-lg shadow-md">
              <Image
                src="/assets/industry/zoom_industry.png"
                className="rounded-lg grayscale"
                style={{ width: "100%" }}
                width={500}
                height={250}
                alt={"Zoom Industry"}
              />
            </div>
            <Button
              onClick={() => {
                window.location.href =
                  "https://tum-ai.notion.site/TUM-ai-Industry-Phase-6-0-AI-Projects-d285a612b00b414ebe81458ef118e155";
              }}
            >
              Apply here!
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
