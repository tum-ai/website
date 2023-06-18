import Section from "@ui/Section";
import Hero from "../components/Hero";
import Image from "next/image";
import Button from "@ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useMembers } from "hooks/useMembers";
import {
  faBullhorn,
  faCode,
  faFileContract,
  faGraduationCap,
  faHandshake,
  faIndustry,
  faLaptop,
  faRocket,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const MemberCard = ({ member }) => {
  const [collapsed, setCollapsed] = useState(false);

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

const MembersCardList = () => {
  const { data: members } = useMembers();

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {members?.map((member) => (
        <MemberCard key={member.name} member={member} />
      ))}
    </div>
  );
};

const DepartmentCard = ({ department }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <article>
      <div
        className="relative h-80 cursor-pointer overflow-hidden rounded-xl shadow-md duration-500 hover:shadow-xl"
        onClick={() => setCollapsed(!collapsed)}
      >
        <Image
          src={department.image}
          alt={`image of ${department.name}`}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute flex h-full w-full flex-col items-center justify-center text-white backdrop-brightness-50">
          <FontAwesomeIcon icon={department.icon} size="4x" className="mb-4" />
          <h2 className="text-4xl font-bold">{department.name}</h2>
        </div>

        {collapsed && (
          <div className="absolute flex h-full w-full items-center justify-center p-8 text-center text-white backdrop-blur-md backdrop-brightness-50">
            <p className="text-lg">{department.description}</p>
          </div>
        )}
      </div>
    </article>
  );
};

const DepartmentList = () => {
  const departments = [
    {
      name: "Makeathon",
      description:
        "Organizing the largest Makeathon in Munich, a virtual 48-hour challenge where you develop a real-world business case involving AI. We will provide helpful workshops and insightful business talks, as well as assistance from mentors and industry experts.",
      // image: "https://www.tum-ai.com/assets/img/other/team_work.png",
      image: "https://www.tum-ai.com/assets/img/members/daniel_korth.webp",
      icon: faLaptop,
    },
    {
      name: "Venture",
      description:
        "The Venture department is mainly focused on bridging the gap between idea and building next successful venture. We are responsible for providing help in entrepreneurial activities for ALL Tum.ai members!",
      image:
        "https://www.tum-ai.com/assets/img/departments/spacex-OHOU-5UVIYQ-unsplash.jpg",
      icon: faRocket,
    },
    {
      name: "Industry",
      description:
        "The Industry Team provides project opportunities with industry partners during the lecture-free period. We help TUM.ai members to apply AI in real world company challenges - bridging the gap between theory and practice.",
      image: "https://www.tum-ai.com/assets/img/other/notebook.png",
      icon: faIndustry,
    },
    {
      name: "Education",
      description:
        "The Education department educates TUM.ai members and the public about AI in all possible domains. We are responsible for creating educational content, organize educational events and spread knowledge - from beginner to expert level.",
      image:
        "https://www.tum-ai.com/assets/img/other/john-schnobrich-2FPjlAyMQTA-unsplash.jpg",
      icon: faGraduationCap,
    },
    {
      name: "Software dev",
      description:
        "The Software Development Department (DEV) is crucial for running the group TUM.ai in an efficient, modern and collaborative way. It is responsible for implementing in-house software tools, cloud services and the initiative's SaaS infrastructure.",
      image: "https://www.tum-ai.com/assets/img/departments/codeing.jpg",
      icon: faCode,
    },
    {
      name: "Legal & Finance",
      description:
        "The Legal & Finance Department is responsible for making sure that TUM.ai acts accordingly to all relevant laws. In regard to that, one of our main tasks is to account for all incoming and outgoing capital streams to ensure that TUM.ai keeps its non-profit status.",
      image: "https://www.tum-ai.com/assets/img/departments/financelegal.jpg",
      icon: faFileContract,
    },
    {
      name: "Community",
      description:
        "The people are the biggest asset of any organization! Even more so in student initiatives, the community is the driving force behind the overall success of the initiative. Therefore, the community department manages gatherings, buddy events and the overall recruitment process.",
      image: "https://www.tum-ai.com/assets/img/departments/TUMai_team32.png",
      icon: faUserGroup,
    },
    {
      name: "Marketing & PR",
      description:
        "The marketing department is about promoting the vision and mission of TUM.ai, serving as the face of our community, coordinating and producing all materials representing TUM.ai.  Reaching out to create an overarching image that represents our initiative in a positive light.",
      image: "https://www.tum-ai.com/assets/img/departments/marketing.jpg",
      icon: faBullhorn,
    },
    {
      name: "Partners & Sponsors",
      description:
        "We make sure that we cooperate with the most awesome partners and sponsors and thereby strengthen the TUM.AI network. Our partner- and sponsorships are the basis for creating ambitious events and project collaborations. ",
      image: "https://www.tum-ai.com/assets/img/departments/partners.jpg",
      icon: faHandshake,
    },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {departments?.map((department) => (
        <DepartmentCard key={department.name} department={department} />
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

        <MembersCardList />
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
        <div className="mb-16">
          <h2 className="mb-2 text-center text-4xl font-bold">Departments</h2>
          <p className="text-center">
            All of our active members contribute to one or more of the following
            organizational departments.
          </p>
        </div>

        <DepartmentList />
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
