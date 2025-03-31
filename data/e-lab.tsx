export const partners = [
  {
    href: "https://www.atoss.com/de",
    src: "/assets/industry/partners/ATOSS.png",
    alt: "atoss",
  },
  {
    href: "https://www.hypovereinsbank.de",
    src: "/assets/industry/partners/HVB_2.png",
    alt: "hypovereinsbank",
  },
  {
    href: "https://www.infineon.com/cms/de/",
    src: "/assets/industry/partners/infineon_logo.png",
    alt: "infineon",
  },
  {
    href: "https://www.prosiebensat1.com",
    src: "/assets/industry/partners/P7S1_transparent.png",
    alt: "prosiebensat1",
  },
  {
    href: "https://www.sportortho.mri.tum.de",
    src: "/assets/industry/partners/MRI.png",
    alt: "MRI",
  },
  {
    href: "https://neuralprophet.com",
    src: "/assets/industry/partners/neuralprophet_logo.png",
    alt: "neuralprophet",
  },
  {
    href: "https://eyeo.com",
    src: "/assets/industry/partners/eyeo.png",
    alt: "eyeo",
  },
  {
    href: "https://gruppe.schwarz",
    src: "/assets/industry/partners/schwarzgroup_edit_cropped.png",
    alt: "Schwarz Gruppe",
  },
  {
    href: "https://www.rohde-schwarz.com/de",
    src: "/assets/industry/partners/RandS.png",
    alt: "Rhode-Schwarz",
  },
];

export const testimonials = [
  {
    imgSrc: "/assets/e-lab/testimonials/ikigai_team.png",
    name: "Team ikigai",
    text: 'The AI E Lab was one of the few "non-bullshit" sources during our journey. It was a sandbox full of other really cool people truly wanting to challenge themselves and their idea. Through those interactions could we understand our own business better, share insights and give back to the community and feel like every single one of the people there will walk out of the AI E Lab with a new perspective!',
    logoSrc: "/assets/e-lab/testimonials/ikigai.png",
    logoAlt: "ikigai",
    link: "https://www.linkedin.com/company/get-ikigai/",
    company: "https://www.get-ikigai.com/",
  },
  {
    imgSrc: "/assets/e-lab/testimonials/florian_scherl.jpg",
    name: "Florian Scherl",
    text: "I really loved the abundance of pitch events. It not only immensely improved my pitching but I also received priceless feedback for my idea and even found my NLP team lead at the final pitch. I definitely recommend applying to the AI E-Lab and using the provided knowledge and resources to the fullest. They offer great advice and guidance. Lastly, I greatly appreciated the peer-to-peer exchange. They absolutely brought the brightest minds together to start new thriving ventures.",
    logoSrc: "/assets/e-lab/testimonials/fast_ai_movies.png",
    logoAlt: "FAST AI Movies",
    link: "https://www.linkedin.com/in/florian-scherl/",
    company: "https://fast-ai-movies.de/",
  },
  {
    imgSrc: "/assets/e-lab/testimonials/tom_doerr.jpeg",
    name: "Tom Dörr",
    text: "I gained real, usable insights into the world of start-ups, including the ins and outs of fundraising. The feedback of others added layers to my understanding and helped refine my ideas. The interactive nature of the sessions, were great, the one on product-market fit really stood out for me. One of the best parts was connecting with people who share a passion for AI. Working on projects with them has been a unique and rewarding experience.",
    logoSrc: "/assets/e-lab/testimonials/conic_w.png",
    logoAlt: "conic",
    link: "https://www.linkedin.com/in/tom-d%C3%B6rr-912607126/",
    company: "https://github.com/tom-doerr",
  },
  {
    imgSrc: "/assets/e-lab/testimonials/marc_alexander_kuehn.jpg",
    name: "Marc Alexander Kühn (Jury)",
    text: "Participating in AI E-Lab's final pitch event as a jury member was an enriching experience. It was great to see so many young people driving change in Artificial Intelligence. Also, it was thrilling to see some of the teams making significant progress after the incubation program. Above all, I believe what TUM.ai E-Lab is doing for the Munich ecosystem is of significant value. They're cultivating a vibrant environment for young, talented students and graduates to kick-start their entrepreneurial journey. Their dedication to unleashing the future of AI innovation in Munich is remarkable and I'm excited to see where their efforts will lead.",
    logoSrc: "/assets/e-lab/partners/uvc_w.svg",
    logoAlt: "UVC Partners",
    link: "https://www.linkedin.com/in/marc-alexander-kuehn/",
    company: "https://www.uvcpartners.com/",
  },
  {
    imgSrc: "/assets/e-lab/testimonials/maximilian_jesch.png",
    name: "Maximilian Jesch (Jury)",
    text: "Being a jury member at the AI Startup Contest was an exhilarating experience! The passion and innovation displayed by the participating teams left me truly impressed. Their groundbreaking ideas and impeccably delivered pitches showcased the immense potential of the next generation of AI-driven entrepreneurship. I have no doubt that these teams are on the cusp of revolutionizing the industry and driving us into an exciting AI-powered future. It's an honor to be part of their journey, and I eagerly anticipate witnessing their continued success and impact on the world.",
    logoSrc: "",
    logoAlt: "",
    link: "https://www.linkedin.com/in/maximilian-jesch/",
    company: "",
  },

  // {
  //   imgSrc: "/assets/e-lab/testimonials/leon_hergert.jpeg",
  //   name: "Leon Hergert",
  //   text: "As the co-founder of Spherecast, a software solution for e-commerce brands addressing stock imbalances with advanced machine learning, our  journey began with the AI E-Lab program. Beyond just the network, the AI E-Lab's mentorship was instrumental. Our mentor, a seasoned e-commerce entrepreneur, continues to provide invaluable guidance and challenge us. If AI and startups excite you, whether you have an idea or seek co-founders, the AI E-Lab is the ideal platform.",
  //   logoSrc: "/assets/e-lab/testimonials/spherecast_ls.png",
  //   logoAlt: "spherecast",
  // },
  // {
];

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  description?: string;
  imgSrc: string;
  imgAlt: string;
  socialMedia: SocialMedia;
}

export interface SocialMedia {
  linkedin: string;
  x?: string;
  instagram?: string;
  youtube?: string;
  website?: string;
  email?: string;
}

export const team: Person[] = [
  {
    id: "laurenz-sommerlad",
    firstName: "Laurenz",
    lastName: "Sommerlad",
    role: "Head of Venture",
    description:
      "Hey, I am Laurenz and lead the amazing team behind the AI E-LAB. My journey began at a young age, building my first software projects at 12 and founding a student-led startup at 15. These early experiences paved the way for my burning passion in AI, Robotics and Entrepreneurship.\n\n" +
      "Here is a quick overview of my academic achievements and work:\n\n" +
      "- Ranked in the Top 2% at TUM Department of Computer Science and achieved an Abitur GPA of 1.0\n" +
      "- Conducting research at LMU Hospital to predict rare child diseases using federated learning-based Graph ML techniques on patient phenotypes, genes, and proteins\n" +
      "- Developing perception and path planning software for an Autonomous Mars Rover participating in International Rover Competitions with WARR Space Robotics, while also leading Partner & Sponsors | PR & Marketing subteams \n" +
      "- Over 2+ years of work experience as a Software Engineer in Full-Stack web-based applications (working student)\n\n" +
      "Outside of my professional endeavors, I enjoy doing a lot of different sports like weight training, martial arts (Wing Chun), marathons, technical and cave diving, wakeboarding, snowboarding, and preparing for my first Ironman. I am also in love with traveling, exploring foreign cultures and learning languages including French, Spanish, Japanese & Arabic which continues to enrich my life.\n\n" +
      "Driven by a desire to make the world a better place, I am committed to solving the most challenging problems with technology. Feel free to reach out — I am always up for a coffee and a good conversation! ☕",
    imgSrc: "/assets/e-lab/team/laurenz_sommerlad.jpg",
    imgAlt: "Laurenz Sommerlad",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/laurenzsommerlad/",
      x: "https://x.com/Lauros_World",
      instagram: "https://www.instagram.com/laurenzsommerlad/",
      youtube: "https://www.youtube.com/@LaurenzSommerlad",
      website: "https://laurenzsommerlad.com",
      email: "laurenz.sommerlad@tum-ai.com",
    },
  },
  {
    id: "jan-christopher-michalczik",
    firstName: "Jan-Christopher",
    lastName: "Michalczik",
    role: "Strategy & Events",
    description:
      "Hey, nice to meet you! During the course of my studies, I have had the chance to gather some business acumen across different B-Schools. Starting with traditional subjects like finance and accounting, I have continually expanded my horizon to areas more strongly focused on innovation and technology management. Herein, my focus currently lies on but is not limited to AI. My journey has taken me across different countries and industries like the financial sector, shipping, and fruits wholesale.\n\n" +
      "More importantly, I have had the chance to get immersed in two European innovation hubs: Paris and Munich. The German capital of beer and Weißwurst specifically caught my attention due to its proximity between tech and business which is hard to find elsewhere at the same scale. In the two years since I stepped my foot into the city, it has done everything else but disappointed. So, I am looking very forward to learning how you are contributing to this awesome vibe!\n\n" +
      "Whatever your challenge is, I am here to help you solve it. I cannot wait to brainstorm with you or connect you to one of the numerous experts that TUM.ai will get you access to. From organizing last year's E-Lab, I can tell you that our participants, organizers, and partners made it a blast. So, get your act together, handle your responsibilities, and make sure you set aside some time for this program. It is worth it!\n\n" +
      "If you need more info than is presented on our website, sign up for our newsletter, go to one of our info events, or just reach out directly.",
    imgSrc: "/assets/e-lab/team/jan_michalczik.png",
    imgAlt: "Jan-Christopher Michalczik",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/jan-michalczik/",
      x: "",
      instagram: "",
      youtube: "",
      website: "",
      email: "jan-christopher.michalczik@tum-ai.com",
    },
  },
  {
    id: "benedikt-wieser",
    firstName: "Benedikt",
    lastName: "Wieser",
    role: "Strategy & Events",
    description:
      "Having a background in Business Administration from the University of St. Gallen and studies at Berkeley, I’ve worked on multiple startup projects, in venture capital, at a scale-up, and participated in the AI E-Lab 2.0 startup incubator.\n\nAdditional to my professional experience, I learnt to lead teams in high-stress situations as an officer cadet in the Austrian Armed Forces, instilling in me strong personal drive and get-things-done thinking.\n\nBesides being passionate about entrepreneurship I love outdoor adventures like whitewater rafting and hiking, and always strive to explore and feel the intensity of life. I am absolutely looking forward to accompanying you on your individual, entrepreneurial journey. Let’s build something amazing together!",
    imgSrc: "/assets/e-lab/team/benedikt_wieser.jpg",
    imgAlt: "Benedikt Wieser",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/benedikt-wieser-6430a3139/",
      x: "",
      instagram: "",
      youtube: "",
      website: "",
      email: "",
    },
  },
  {
    id: "emine-hakani",
    firstName: "Emine",
    lastName: "Hakani",
    role: "Partners & Sponsors",
    description: "",
    imgSrc: "/assets/e-lab/team/emine_hakani.png",
    imgAlt: "Emine Hakani",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/emine-hakani-muc/",
      x: "",
      instagram: "",
      youtube: "",
      website: "",
      email: "venture@tum-ai.com",
    },
  },
  {
    id: "philip-juenemann",
    firstName: "Philip",
    lastName: "Jünemann",
    role: "Talent & Community",
    description: "Passionate about Entrepreneurship, Tech and AI!",
    imgSrc: "/assets/e-lab/team/philip_juenemann.jpg",
    imgAlt: "Philip Jünemann",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/philip-louis-j%C3%BCnemann/",
      x: "",
      instagram: "",
      youtube: "",
      website: "",
      email: "philip.juenemann@tum-ai.com",
    },
  },
  {
    id: "david-reyes",
    firstName: "David",
    lastName: "Reyes",
    role: "Talent & Community",
    description:
      "Hey, nice to meet you! I am David, and I am passionate about empowering people to pursue their passions in life (which, of course, includes you). With a solid foundation in engineering and economics, I have gained extensive business and tech knowledge during my studies, with my journey spanning Latin America, the US, and now Europe. This diverse experience has led me through various tech startups, where I have held roles in product management and engineering teams. My past experiences encompass finance, product management, and data science, with AI currently being one of my key areas of interest.\n\n" +
      "Innovation drives me, and I have found a fitting place within the Munich entrepreneurial ecosystem. I am dedicated to ensuring you become part of an amazing batch of smart, diverse, and driven individuals who are passionate about developing solutions and maintaining a thriving sense of community. I look forward to working together to take your startup idea to the moon.",
    imgSrc: "/assets/e-lab/team/david_reyes.png",
    imgAlt: "David Reyes",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/davidreyesj/",
      x: "",
      instagram: "",
      youtube: "",
      website: "",
      email: "david.reyes@tum-ai.com",
    },
  },
  {
    id: "zaid-efraij",
    firstName: "Zaid",
    lastName: "Efraij",
    role: "Events & Strategy",
    description: "",
    imgSrc: "/assets/e-lab/team/zaid_efraij.jpg",
    imgAlt: "Zaid Efraij",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/zaid-efraij-b6630722a/",
      x: "",
      instagram: "",
      youtube: "",
      website: "",
      email: "zaid.efraij@tum-ai.com",
    },
  },
  {
    id: "nagaharshith-makam-sreenivasulu",
    firstName: "Nagaharshith",
    lastName: "Makam Sreenivasulu",
    role: "Marketing",
    description:
      "Hey, I am Nagah. In addition to pursuing a bachelor's degree in Management and Technology at TUM, I also assist with marketing at TUM.ai and TEG e.V. (The Entrepreneurial Group, student startup club in Munich). With a background in business, I am interested in using AI agents to improve traditional business settings. Professionally, I work as a Business Development working student at roadsurfer GmbH.\n\nI am excited to meet you and help you with your AI startup journey!",
    imgSrc: "/assets/e-lab/team/nagah_sreenivasulu.jpg",
    imgAlt: "Nagah Sreenivasulu",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/nagaharshith",
      x: "",
      instagram: "",
      youtube: "",
      website: "",
      email: "nagaharshith-makam.sreenivasulu@tum-ai.com",
    },
  },
];

export const alumni: Person[] = [
  {
    id: "abdulqadir-faruk",
    firstName: "Abdulqadir",
    lastName: "Faruk",
    role: "Advisor",
    description:
      "Abdul serves as an Advisor at TUM.ai, where he brings his experience and expertise in leadership, entrepreneurship, and venture development. He previously led the AI E-Lab as the Head of Venture alongside Daniil Morozov, where they envisioned and re-established the AI E-Lab as a straight-shooting startup sandbox and a genuine community designed to engineer serendipity among founders. Throughout the program, Abdul has been and will continue to be a humble sparring partner for our founders.",
    imgSrc: "/assets/e-lab/team/abdul_faruk.jpg",
    imgAlt: "Abdulqadir Faruk",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/abdulqadirfaruk/",
      x: "",
      instagram: "",
      youtube: "",
      website: "",
      email: "abdul.faruk@tum-ai.com",
    },
  },
  {
    id: "daniil-morozov",
    firstName: "Daniil",
    lastName: "Morozov",
    role: "Advisor",
    description: "",
    imgSrc: "/assets/e-lab/team/daniil_morozov.png",
    imgAlt: "Daniil Morozov",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/daniil-morozov-912490252/",
      x: "",
      instagram: "",
      youtube: "",
      website: "",
      email: "",
    },
  },
  {
    id: "nektarios-totikos",
    firstName: "Nektarios",
    lastName: "Totikos",
    role: "Advisor",
    description: "",
    imgSrc: "/assets/e-lab/team/nektarios_totikos.jpeg",
    imgAlt: "Nektarios Totikos",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/nektarios-totikos/",
      x: "",
      instagram: "",
      youtube: "",
      website: "",
      email: "",
    },
  },
  {
    id: "ian-tolan",
    firstName: "Ian",
    lastName: "Tolan",
    role: "Alumni",
    description: "",
    imgSrc: "/assets/e-lab/team/ian_tolan.png",
    imgAlt: "Ian Tolan",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/ian-tolan-a85b0a107/",
      x: "",
      instagram: "",
      youtube: "",
      website: "",
      email: "",
    },
  },
  {
    id: "david-podolskyi",
    firstName: "David",
    lastName: "Podolskyi",
    role: "Alumni",
    description: "",
    imgSrc: "/assets/e-lab/team/david_podolskyi.png",
    imgAlt: "David Podolskyi",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/davidpodolsky/",
      x: "",
      instagram: "",
      youtube: "",
      website: "",
      email: "",
    },
  },
  {
    id: "luca-dombetzki",
    firstName: "Luca",
    lastName: "Dombetzki",
    role: "Alumni",
    description: "",
    imgSrc: "/assets/e-lab/team/luca_dombetzki.png",
    imgAlt: "Luca Dombetzki",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/luca-dombetzki/",
      x: "",
      instagram: "",
      youtube: "",
      website: "",
      email: "",
    },
  },
  {
    id: "yarhy-flores",
    firstName: "Yarhy",
    lastName: "Flores",
    role: "Alumni",
    description: "",
    imgSrc: "/assets/e-lab/team/yarhy_flores.png",
    imgAlt: "Yarhy Flores",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/yarhy-flores/",
      x: "",
      instagram: "",
      youtube: "",
      website: "",
      email: "",
    },
  },
  {
    id: "sebastian-wilhelm",
    firstName: "Sebastian",
    lastName: "Wilhelm",
    role: "Alumni",
    description: "",
    imgSrc: "/assets/e-lab/team/sebastian_wilhelm.png",
    imgAlt: "Sebastian Wilhelm",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/sebastian-wilhelm/",
      x: "",
      instagram: "",
      youtube: "",
      website: "",
      email: "",
    },
  },
  {
    id: "can-kayalan",
    firstName: "Can",
    lastName: "Kayalan",
    role: "Alumni",
    description: "",
    imgSrc: "/assets/e-lab/team/can_kayalan.png",
    imgAlt: "Can Kayalan",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/can-kayalan/",
      x: "",
      instagram: "",
      youtube: "",
      website: "",
      email: "",
    },
  },
];

export const faq = [
  {
    question: "I don’t feel experienced yet. Should I still apply?",
    answer:
      "Definitely. Our program is designed to equip you with all relevant knowledge and to make your founding experience as convenient as possible.",
  },
  {
    question: "Do I need to be enrolled at a university?",
    answer:
      "No. It doesn't matter whether you are are enrolled at TUM, LMU or a student in Munich at all. We want to make founding accessible to everyone and fair. Regardless of your background, we would like to help you with founding your AI startup. You only have to be present in Munich during the program.",
  },
  {
    question: "My idea is not AI related. Can I still apply?",
    answer:
      "Unfortunately, no. Your startup idea has to be related to artificial intelligence.",
  },
  {
    question: "When will the application phase begin?",
    answer:
      "The application phase will open probably around August 2024 again.",
  },
  // {
  //   question: "When is the application deadline?",
  //   answer: "The application phase closes on 07.09.2023 at 23:59.",
  // },
  {
    question: "Can I apply with a team?",
    answer:
      "Yes, you can, we will consider your application then as a team application.",
  },
  {
    question:
      "What if I don’t find a team during the first week of the AI E-Lab?",
    answer:
      "No worries, if you don’t find a team, you’ll still be able to continue your journey in the E-Lab.",
  },
  {
    question: "Do I have to be located in Munich during the program?",
    answer:
      "Since we organize in-person activities, participants need to be present in Munich during these activities.",
  },
  {
    question: "Am I legally bound to TUM.ai or a partner company?",
    answer:
      "No. We are equity-free and do not want a share in your startup. You only need to invest your dedication and eagerness and we would like to help you with your AI startup.",
  },
  {
    question: "What is the time commitment for this program?",
    answer:
      "The AI E-Lab is a part-time program. Keep in mind that the more you commit, the more you get out of this program.",
  },
];
