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
    icon: faHandshakeSimple,
  },
];
