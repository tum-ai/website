import { bitter } from "@styles/fonts";
import Section from "@ui/Section";
import { cx } from "class-variance-authority";
import Hero from "@components/Hero";
import { DepartmentList } from "./departments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TUM.ai - Members",
};

export default function Members() {
  return (
    <>
      <Hero
        imageSrc={"/assets/tu_cropped.jpg"}
        title="Innovative & Passionate"
        subtitle="Who is behind the success of our initiative?"
      />

      <Section>
        <h2 className={cx("mb-12 text-4xl font-semibold", bitter.className)}>
          The TUM.ai Leadership Journey
        </h2>

        <div className="flex flex-wrap items-center justify-center">
          <div className="clip-point-down xl:clip-point-right w-full rounded bg-white bg-gradient-to-b from-blue-300 to-blue-400 p-8 pb-16 text-center text-white xl:w-max xl:bg-gradient-to-r xl:pb-8 xl:pr-16">
            <h3 className="text-xl font-bold">Member</h3>
            <p>Once you are accepted</p>
          </div>

          <div className="clip-chev-down xl:clip-chev-right w-full rounded bg-white bg-gradient-to-b from-blue-400 to-blue-500 p-8 py-16 text-center text-white xl:w-max xl:bg-gradient-to-r xl:px-16 xl:py-8">
            <h3 className="text-xl font-bold">Teamlead</h3>
            <p>max. for 2 semesters</p>
          </div>

          <div className="clip-chev-down xl:clip-chev-right w-full rounded bg-white bg-gradient-to-b from-blue-500 to-blue-600 p-8 py-16 text-center text-white xl:w-max xl:bg-gradient-to-r xl:px-16 xl:py-8">
            <h3 className="text-xl font-bold">Mentor</h3>
            <p>strategic advisors</p>
          </div>

          <div className="clip-enter-down xl:clip-enter-right w-full rounded bg-white bg-gradient-to-b from-blue-600 to-blue-700 p-8 pt-16 text-center text-white xl:w-max xl:bg-gradient-to-r xl:py-8 xl:pl-16">
            <h3 className="text-xl font-bold">President</h3>
            <p>max. for 2 semesters</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-8">
          <h2 className={cx("mb-4 text-4xl font-semibold", bitter.className)}>
            Departments
          </h2>
          <p>
            All of our active members contribute to one or more of the following
            organizational departments.
          </p>
        </div>

        <DepartmentList />
      </Section>
    </>
  );
}
