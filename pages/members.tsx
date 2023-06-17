import Section from "@ui/Section";
import Header1 from "../components/02_molecules/Header1";
import Image from "next/image";
import Button from "@ui/Button";
import { useState } from "react";
import { useMembers } from "hooks/useMembers";

const MemberCard = ({ member }) => {
  const [collapsed, setCollapsed] = useState(false);

  const { members } = useMembers();

  return (
    <article>
      <div
        className="relative h-80 cursor-pointer overflow-hidden rounded-xl shadow-md duration-500 hover:shadow-xl"
        onClick={() => setCollapsed(!collapsed)}
      >
        <Image
          src={member.image}
          alt={`image of ${member.name}`}
          fill
          style={{ objectFit: "cover" }}
        />
        {collapsed && (
          <div className="absolute h-full w-full p-8 text-center text-white backdrop-blur-md backdrop-brightness-50">
            <p>{member.description}</p>
          </div>
        )}
      </div>

      <div className="p-4 text-center">
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p>{member.role}</p>
      </div>
    </article>
  );
};

export default function Members() {
  const members = [
    {
      name: "David Podolskyi",
      role: "President",
      image: "https://www.tum-ai.com/assets/img/members/david_podolskyi.webp",
      description:
        "ML & Entrepreneurship enthusiast with focus on IoT and Recommender Systems",
    },
    {
      name: "Hamze Al-Zamkan",
      role: "President",
      image: "https://www.tum-ai.com/assets/img/members/hamze_alzamkan.webp",
      description: "lorem ipsum dolor sit amet",
    },
    {
      name: "Hamze Al-Zamkan",
      role: "President",
      image: "https://www.tum-ai.com/assets/img/members/hamze_alzamkan.webp",
      description: "lorem ipsum dolor sit amet",
    },
    {
      name: "Hamze Al-Zamkan",
      role: "President",
      image: "https://www.tum-ai.com/assets/img/members/hamze_alzamkan.webp",
      description: "lorem ipsum dolor sit amet",
    },
    {
      name: "Hamze Al-Zamkan",
      role: "President",
      image: "https://www.tum-ai.com/assets/img/members/hamze_alzamkan.webp",
      description: "lorem ipsum dolor sit amet",
    },
    {
      name: "Hamze Al-Zamkan",
      role: "President",
      image: "https://www.tum-ai.com/assets/img/members/hamze_alzamkan.webp",
      description: "lorem ipsum dolor sit amet",
    },
    {
      name: "Hamze Al-Zamkan",
      role: "President",
      image: "https://www.tum-ai.com/assets/img/members/hamze_alzamkan.webp",
      description: "lorem ipsum dolor sit amet",
    },
  ];

  return (
    <>
      <Header1
        imageSrc={"/assets/tu_cropped.jpg"}
        title="Innovative & Passionate"
        subtitle="Who is behind the success of our initiative?"
      />

      <Section>
        <div className="mb-16">
          <h2 className="mb-2 text-center text-4xl font-bold">
            Our team members
          </h2>
          <p className="text-center">
            Meet our team of <strong>170+</strong> AI Enthusiasts.
          </p>
        </div>

        <div className="mb-8 flex justify-center space-x-2">
          <Button className="text-white">Management Team</Button>

          <Button className="text-white">Board of advisors</Button>

          <Button className="text-white">Department selection</Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <MemberCard member={member} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="mb-8 text-center text-4xl font-bold">
          The TUM.ai leadership journey
        </h2>

        <div className="flex flex-wrap items-center justify-center">
          <div className="clip-point-down xl:clip-point-right w-full bg-white bg-gradient-to-b from-[#4f86c3] to-[#5270cb] p-8 pb-16 text-center text-white xl:w-max xl:bg-gradient-to-r xl:pb-8 xl:pr-16">
            <h3 className="text-xl font-bold">Member</h3>
            <p>Once you are accepted</p>
          </div>

          <div className="clip-chev-down xl:clip-chev-right w-full bg-white bg-gradient-to-b from-[#5270cb] to-[#555ad4] p-8 py-16 text-center text-white xl:w-max xl:bg-gradient-to-r xl:px-16 xl:py-8">
            <h3 className="text-xl font-bold">Teamlead</h3>
            <p>max. for 2 semesters</p>
          </div>

          <div className="clip-chev-down xl:clip-chev-right w-full bg-white bg-gradient-to-b from-[#555ad4] to-[#5743dc] p-8 py-16 text-center text-white xl:w-max xl:bg-gradient-to-r xl:px-16 xl:py-8">
            <h3 className="text-xl font-bold">Mentor</h3>
            <p>strategic advisors</p>
          </div>

          <div className="clip-enter-down xl:clip-enter-right w-full bg-white bg-gradient-to-b from-[#5743dc] to-[#5a2de5] p-8 pt-16 text-center text-white xl:w-max xl:bg-gradient-to-r xl:py-8 xl:pl-16">
            <h3 className="text-xl font-bold">President</h3>
            <p>max. for 2 semesters</p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="mb-2 text-center text-4xl font-bold">Departments</h2>
        <p className="text-center">
          All of our active members contribute to one or more of the following
          organizational departments.
        </p>
      </Section>

      <Section>
        <h2 className="mb-2 text-center text-4xl font-bold">
          Talent breeds talent
        </h2>

        <p className="mb-2 text-center">
          TUM.ai of students from various disciplines. On one hand, a lot of
          students come from technical disciplines like computer science, data
          engineering and other areas of technology. On the other hand, we also
          welcome students from non-technical backgrounds which can help us
          apply AI in their field with application knowledge.
        </p>

        <p className="text-center">
          <strong>Currently we count over 170 active members!</strong>
        </p>
      </Section>
    </>
  );
}
