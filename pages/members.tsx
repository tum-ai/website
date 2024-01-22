import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bitter } from "@styles/fonts";
import Head from "next/head";
import Section from "@ui/Section";
import { cx } from "class-variance-authority";
import { departments } from "data/departments";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Hero from "../components/Hero";

const DepartmentCard = ({ department, open, setOpen, index }) => {
  return (
    <article>
      <div
        className="relative h-80 cursor-pointer overflow-hidden rounded shadow-md duration-500 hover:shadow-xl"
        onClick={() => {
          if (open === index) {
            setOpen(undefined);
          } else {
            setOpen(index);
          }
        }}
      >
        <Image
          src={department.image}
          alt={`image of ${department.name}`}
          fill
          className="object-cover"
        />
        <div className="absolute flex h-full w-full flex-col items-center justify-center rounded text-white backdrop-brightness-50">
          <FontAwesomeIcon icon={department.icon} size="4x" className="mb-4" />
          <h2 className="text-4xl font-bold">{department.name}</h2>
        </div>

        {open === index && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute flex h-full w-full items-center justify-center rounded p-8 text-center text-white backdrop-blur-md backdrop-brightness-50"
            >
              <p className="text-lg">{department.description}</p>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </article>
  );
};

const DepartmentList = () => {
  const [open, setOpen] = useState<number>();

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {departments?.map((department, index) => (
        <DepartmentCard
          key={department.name}
          department={department}
          index={index}
          open={open}
          setOpen={setOpen}
        />
      ))}
    </div>
  );
};

export default function Members() {
  return (
    <>
      <Head>
        <title>TUM.ai - Members</title>
        <meta
          name="description"
          content='TUM.ai is a student initiative based at the Technical University of Munich. We connect students and all relevant stakeholders to facilitate the application of AI across domains to drive positive societal impact through interdisciplinary projects. Together with our highly talented members, we run projects with industry partners, workshops and so called "Makeathon" product development competitions all around the topic of Artificial Intelligence and Data Analytics. '
        />
      </Head>
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
