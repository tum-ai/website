import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@ui/Button";
import Section from "@ui/Section";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Hero from "../components/Hero";
import { useMembers } from "hooks/useMembers";
import { departments } from "data/departments";
import { cx } from "class-variance-authority";
import { bitter } from "@styles/fonts";

const MemberCard = ({ member, open, setOpen, index }) => {
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
          className="grayscale"
          src={member.image}
          alt={`image of ${member.name}`}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        {open === index && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute h-full w-full rounded p-8 text-center text-white backdrop-blur-md backdrop-brightness-50"
            >
              <b>Degree</b>
              <p>{member.degree}</p>
              <br />

              <p>{member.description}</p>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <div className="p-4 text-center">
        <h3 className="text-xl font-bold">{member.name}</h3>
        <div>
          {member.roles.map((role: string) => (
            <p key={role}>{role}</p>
          ))}
          {member.departments.map((department: string) => (
            <p key={department}>{department}</p>
          ))}
        </div>
      </div>
    </article>
  );
};

const MembersCardList = ({ members, status }) => {
  const amountTruncatedMembers = 12;
  const [open, setOpen] = useState<number>();
  const [showAll, setShowAll] = useState(false);

  if (status === "loading") {
    return (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {Array.from<number>({ length: amountTruncatedMembers }).map((index) => (
          <div
            key={index}
            className="relative h-80 animate-pulse cursor-pointer overflow-hidden rounded bg-gray-300 shadow-md"
          ></div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {members?.slice(0, amountTruncatedMembers)?.map((member, i) => (
          <MemberCard
            key={member.name}
            open={open}
            setOpen={setOpen}
            member={member}
            index={i}
          />
        ))}
        {showAll &&
          members
            ?.slice(amountTruncatedMembers)
            ?.map((member, i) => (
              <MemberCard
                key={member.name}
                open={open}
                setOpen={setOpen}
                member={member}
                index={i + amountTruncatedMembers}
              />
            ))}
      </div>

      {!showAll && (
        <div className="flex justify-center">
          <Button className="text-white" onClick={() => setShowAll(true)}>
            Show all members
          </Button>
        </div>
      )}
    </>
  );
};

const MemberListSection = () => {
  const { data: members, status } = useMembers();
  // TODO: Add filtering and sorting
  // TODO: Add dropdown component for department selection

  return (
    <Section>
      <div className="mb-16">
        <h2 className={cx("mb-2 text-4xl font-semibold", bitter.className)}>
          Our Active Team Members
        </h2>
        <p>
          Meet our team of <strong>{members?.length ?? "..."}+</strong> AI
          Enthusiasts.
        </p>
      </div>

      <MembersCardList members={members} status={status} />
    </Section>
  );
};

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
          style={{ objectFit: "cover" }}
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
      <Hero
        imageSrc={"/assets/tu_cropped.jpg"}
        title="Innovative & Passionate"
        subtitle="Who is behind the success of our initiative?"
      />

      <MemberListSection />

      <Section>
        <h2 className={cx("mb-12 text-4xl font-semibold", bitter.className)}>
          The TUM.ai leadership journey
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
        <div className="mb-16">
          <h2 className={cx("mb-2 text-4xl font-semibold", bitter.className)}>
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
