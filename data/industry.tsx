interface Partner {
  href: string;
  src: string;
  alt: string;
}

export const partners_ip4: Partner[] = [
  {
    href: "https://www.atoss.com/de",
    src: "/assets/industry/partners/IP4/ATOSS.png",
    alt: "atoss",
  },
  {
    href: "https://www.hypovereinsbank.de",
    src: "/assets/industry/partners/IP4/HVB_2.png",
    alt: "hypovereinsbank",
  },
  {
    href: "https://www.infineon.com/cms/de/",
    src: "/assets/industry/partners/IP4/infineon_logo.png",
    alt: "infineon",
  },
  {
    href: "https://www.prosiebensat1.com",
    src: "/assets/industry/partners/IP4/P7S1_transparent.png",
    alt: "prosiebensat1",
  },
  {
    href: "https://www.sportortho.mri.tum.de",
    src: "/assets/industry/partners/IP4/MRI.png",
    alt: "MRI",
  },
  {
    href: "https://neuralprophet.com",
    src: "/assets/industry/partners/IP4/neuralprophet_logo.png",
    alt: "neuralprophet",
  },
  {
    href: "https://eyeo.com",
    src: "/assets/industry/partners/IP4/eyeo.png",
    alt: "eyeo",
  },
  {
    href: "https://gruppe.schwarz",
    src: "/assets/industry/partners/IP4/schwarzgroup_edit_cropped.png",
    alt: "Schwarz Gruppe",
  },
  {
    href: "https://www.rohde-schwarz.com/de",
    src: "/assets/industry/partners/IP4/RandS.svg.png",
    alt: "Rhode-Schwarz",
  },
];

export const partners_ip5: Partner[] = [
  {
    href: "https://www.airbus.com/en",
    src: "/assets/industry/partners/IP5/1200px-Airbus_logo_2017.png",
    alt: "Airbus",
  },
  {
    href: "https://www.burda.com/en/",
    src: "/assets/industry/partners/IP5/Hubert_Burda_Media_Logo.png",
    alt: "Burda",
  },
  {
    href: "https://www.hypovereinsbank.de/hvb/privatkunden",
    src: "/assets/industry/partners/IP5/Logo-Case-HypoVereinsbank-1240x870px.svg",
    alt: "HVB",
  },
  {
    href: "https://www.mri.tum.de",
    src: "/assets/industry/partners/IP5/2560px-Klinikum_rechts_der_Isar_logo.svg.png",
    alt: "MRI",
  },
  {
    href: "https://www.recogni.com",
    src: "/assets/industry/partners/IP5/Recogni_Logo.jpg.webp",
    alt: "Recogni",
  },
  {
    href: "https://company.rtl.com/en/homepage/",
    src: "/assets/industry/partners/IP5/RTL.png",
    alt: "RTL",
  },
  {
    href: "https://www.go-turtle.com",
    src: "/assets/industry/partners/IP5/TURTLE_Logo_Claim.067bf3dd46c5285ea24fb1b3e0904721.svg",
    alt: "Turtle",
  },
];

interface Link {
  url: string;
  displayText: string;
}

interface Project {
  title: string;
  image: string;
  description: [{ text: string; link?: Link[]; moreText?: string }];
  organization: string;
  organizationLink: string;
  time: string;
}

export const projects: Project[] = [
  {
    title: "Recogni - ML on Custom Hardware",
    image: "/assets/industry/project_cards/recogni_white_bg.png",
    description: [
      {
        text: "Recogni is building a custom chip for perception in autonomous driving. In this project, the team will work on bringing a set of state of the art models to Recogni’s custom hardware.",
      },
    ],
    organization: "Recogni",
    organizationLink: "https://www.recogni.com",
    time: "spring 2023",
  },
  {
    title: "Airbus - Big Data Analysis Framework",
    image: "/assets/industry/project_cards/airbus_white_bg.png",
    description: [
      {
        text: "Building a dynamic mission simulator for the Airbus Aircraft-as-a-Sensor initiative. This simulator will help Airbus to explore and simulate a wide range of Aircraft-as-a-Sensor opportunities. ",
      },
    ],
    organization: "Airbus",
    organizationLink: "https://www.airbus.com/en",
    time: "spring 2023",
  },
  {
    title: "Roland Berger - Cloud-based Data Processing",
    image: "/assets/industry/project_cards/rolandberger_industry.png",
    description: [
      {
        text: "Implementation of cloud-based web services, containing NLP Machine Learning models -",
        link: [
          {
            url: "https://www.linkedin.com/in/stefanrmmr/",
            displayText: "Stefan Rummer",
          },
          {
            url: "https://www.linkedin.com/in/robin-mittas-a29a11201/",
            displayText: "Robin Mittas",
          },
          {
            url: "https://www.linkedin.com/in/vtq/",
            displayText: "Tuan-Quang Vuong",
          },
        ],
        moreText:
          "built scalable APIs that were deployed to production globally. These enabled Roland Berger to automatically enrich their CRM systems with financial market insights and LinkedIn company data.",
      },
    ],
    organization: "Roland Berger",
    organizationLink: "https://www.rolandberger.com/de/",
    time: "fall 2022",
  },
  {
    title: "QuantCo - Virtual Biopsy",
    image: "/assets/industry/project_cards/quantco.jpeg",
    description: [
      {
        text: "4x stellar students supported QuantCo in their mission to revolutionize the way prostate cancer is detected leveraging ML-based virtual biopsy.",
        link: [
          {
            url: "https://www.linkedin.com/in/richardgaus/",
            displayText: "Richard Gaus",
          },
          {
            url: "https://www.linkedin.com/in/cedrik-laue-770682203/",
            displayText: "Cedrik Laue",
          },
        ],
        moreText:
          "Implemented algorithms for medical image processing, ranging from pre-processing, registration, all the way to the segmentation of MRI data.",
      },
    ],
    organization: "QuantCo",
    organizationLink: "https://quantco.com/",
    time: "fall 2022",
  },
  {
    title: "TUM MRI Radiology - Klinikum Rechts der Isar",
    image: "/assets/industry/project_cards/radiologie.png",
    description: [
      {
        text: "The Institute for Diagnostic and Interventional Radiology performs and evaluates examinations using ultrasound, conventional X-ray technology, CT and MRI. Project participants collaborated with radiologists to learn about the specifics of medical imaging formats (such as DICOM) and the basics of medical knowledge required for the task.",
        // Update with links and moreText when more details available
      },
    ],
    organization: "TUM MRI",
    organizationLink: "https://www.mri.tum.de/", // Update if there's an actual link
    time: "fall 2022", // Update if there's an actual date
  },
  {
    title: "TURTLE - Maritime Matchmaking",
    image: "/assets/industry/project_cards/turtle_sea_transport.jpg",
    description: [
      {
        text: "TURTLE empowers seafarers and enables a digital, efficient, and compliant market free from corruption and other illegal and immoral activities. We joined a team of industry professionals building a global online job marketplace that connects ship owners and seafarers directly, work in a fast-growing startup and with strong social impact!",
      },
    ],
    organization: "TURTLE",
    organizationLink:
      "https://www.linkedin.com/company/turtle-gmbh/?originalSubdomain=de",
    time: "spring 2022",
  },
  {
    title: "Leevi Health - Baby Health Monitoring",
    image: "/assets/industry/project_cards/leevi_baby.png",
    description: [
      {
        text: "During this project we contributed to Leevi's mission of providing digital health solutions for infants. Leevi helps parents accurately understand the wellbeing of their babies through individual insights via a wearable bracelet that collects the babies vital and sleep parameters.",
      },
    ],
    organization: "Leevi",
    organizationLink: "https://leevi-health.com/",
    time: "spring 2022",
  },
  {
    title: "Cognote.ai - Medical Speech Recognition",
    image: "/assets/industry/project_cards/prev_cognote.png",
    description: [
      {
        text: "During this AI project, our team worked broadly on conversational speech recognition technology for the medical domain. This involved the assembly of a German speech dataset, training (and/or fine-tuning) large modern speech models on our compute infrastructure and evaluating their effectiveness relative to current cloud offerings.",
      },
    ],
    organization: "Cognote",
    organizationLink: "https://www.cognote.ai/",
    time: "spring 2022",
  },
  {
    title: "Presize.ai - Clothing size recommender systems",
    image: "/assets/industry/project_cards/presize_resize.jpg",
    description: [
      {
        text: "We created a recommender system for clothing sizes and benchmarked it against Presize’s own technology. This way we actively contributed of Presize's s vision of reducing the amount of paercel-returns.",
      },
    ],
    organization: "presize.ai",
    organizationLink: "https://www.presize.ai/",
    time: "fall 2021",
  },
  {
    title: "Heimkapital - Real estate price prediction",
    image: "/assets/industry/project_cards/heimkapital_resized.jpg",
    description: [
      {
        text: "We developed solutions to make an impact on the financial independence of homeowners by implementing an AI that can predict real estate prices based on population data.",
      },
    ],
    organization: "Heimkapital",
    organizationLink:
      "https://www.heimkapital.de/?gclid=Cj0KCQjwqKuKBhCxARIsACf4XuFcI2JnKY0mJUc5_abF6uqJlJyi1Uqi291fM6qQD6V0WSy3aKzhFGMaArIQEALw_wcB",
    time: "fall 2021",
  },
  {
    title: "DynaGroup & Veritas PR - NLP paraphrasing",
    image: "/assets/industry/project_cards/dyna_group_resize.jpg",
    description: [
      {
        text: "We created an NLP-based system that can paraphrase sequences of text while reliably preserving the meaning - making online content creation easier and less-time consuming for smaller companies and non-profits.",
      },
    ],
    organization: "DynaGroup",
    organizationLink: "https://www.dynagroup.de/",
    time: "fall 2021",
  },
];
