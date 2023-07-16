import {
  IconDefinition,
  faBullhorn,
  faCode,
  faFileContract,
  faGraduationCap,
  faHandshakeSimple,
  faIndustry,
  faLaptop,
  faRocket,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

type Department = {
  name: string;
  description: string;
  image: string;
  icon: IconDefinition;
};

export const departments: Department[] = [
  {
    name: "Makeathon",
    description:
      "Organizing the largest Makeathon in Munich, a virtual 48-hour challenge where you develop a real-world business case involving AI. We will provide helpful workshops and insightful business talks, as well as assistance from mentors and industry experts.",
    image: "/assets/departments/makeathon.png",
    icon: faLaptop,
  },
  {
    name: "Venture",
    description:
      "The Venture department is mainly focused on bridging the gap between idea and building next successful venture. We are responsible for providing help in entrepreneurial activities for ALL Tum.ai members!",
    image: "/assets/departments/venture.jpg",
    icon: faRocket,
  },
  {
    name: "Industry",
    description:
      "The Industry Team provides project opportunities with industry partners during the lecture-free period. We help TUM.ai members to apply AI in real world company challenges - bridging the gap between theory and practice.",
    image: "/assets/departments/industry.png",
    icon: faIndustry,
  },
  {
    name: "Education",
    description:
      "The Education department educates TUM.ai members and the public about AI in all possible domains. We are responsible for creating educational content, organize educational events and spread knowledge - from beginner to expert level.",
    image: "/assets/departments/education.jpg",
    icon: faGraduationCap,
  },
  {
    name: "Software dev",
    description:
      "The Software Development Department (DEV) is crucial for running the group TUM.ai in an efficient, modern and collaborative way. It is responsible for implementing in-house software tools, cloud services and the initiative's SaaS infrastructure.",
    image: "/assets/departments/software_dev.jpg",
    icon: faCode,
  },
  {
    name: "Legal & Finance",
    description:
      "The Legal & Finance Department is responsible for making sure that TUM.ai acts accordingly to all relevant laws. In regard to that, one of our main tasks is to account for all incoming and outgoing capital streams to ensure that TUM.ai keeps its non-profit status.",
    image: "/assets/departments/legal_and_finance.jpg",
    icon: faFileContract,
  },
  {
    name: "Community",
    description:
      "The people are the biggest asset of any organization! Even more so in student initiatives, the community is the driving force behind the overall success of the initiative. Therefore, the community department manages gatherings, buddy events and the overall recruitment process.",
    image: "/assets/departments/community.png",
    icon: faUserGroup,
  },
  {
    name: "Marketing & PR",
    description:
      "The marketing department is about promoting the vision and mission of TUM.ai, serving as the face of our community, coordinating and producing all materials representing TUM.ai.  Reaching out to create an overarching image that represents our initiative in a positive light.",
    image: "/assets/departments/marketing_and_pr.jpg",
    icon: faBullhorn,
  },
  {
    name: "Partners & Sponsors",
    description:
      "We make sure that we cooperate with the most awesome partners and sponsors and thereby strengthen the TUM.AI network. Our partner- and sponsorships are the basis for creating ambitious events and project collaborations. ",
    image: "/assets/departments/partners_and_sponsors.jpg",
    icon: faHandshakeSimple,
  },
];
