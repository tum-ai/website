import Image from "next/image";
import Link from "next/link";
import PictureHero from "../components/BannerHero";
import Section from "@ui/Section";
import * as Tabs from "@radix-ui/react-tabs";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "@components/ui/Button";

export default function Industry() {
  const partners = [
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

  const projects = [
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
      image: "/assets/industry/project_cards/seafarer.png",
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

  return (
    <>
      <PictureHero
        imageSrc="/assets/industry/header/infineon_industry.jpeg"
        titleImageSrc="/assets/industry/header/industry_header_no_date.svg"
        subtitle="Your stepping stone to a career in AI"
      />
      <div>
        <Tabs.Root defaultValue="students">
          <Tabs.List className="grid grid-cols-2 text-xl">
            <Tabs.Trigger
              value="students"
              className="border-b-2 border-gray-400 p-4 text-gray-400 data-[state=active]:border-purple-500 data-[state=active]:text-purple-500"
            >
              Students
            </Tabs.Trigger>
            <Tabs.Trigger
              value="industry"
              className="border-b-2 border-gray-400 p-4 text-gray-400 data-[state=active]:border-purple-500 data-[state=active]:text-purple-500"
            >
              Industry
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="students">
            <Section className="flex animate-fadeIn justify-center">
              <div className="rounded-3xl sm:bg-gray-50 sm:p-14 sm:shadow-lg sm:shadow-blue-500/20">
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-16">
                  <div>
                    <h2 className="mb-6 text-4xl font-semibold">
                      Applications for Industry Phase 5.0 will open in summer
                    </h2>
                    <hr className="border-b-1 my-6 border-gray-300" />
                    <p className="mb-8 text-xl">
                      Push ML boundaries and progress your career with our AI
                      projects!{" "}
                      <span className="text-purple-600">
                        Leverage your skills
                      </span>{" "}
                      and take on real AI projects to test your abilities. Join
                      us now!
                      <br />
                      <br />
                      Work in a{" "}
                      <span className="text-purple-600">
                        team of 4x students for 12 weeks, earn 2700€
                      </span>{" "}
                      and gain valuable contacts. With a project lead guiding
                      you, demonstrate your agile project management skills in a
                      professional setting.
                      <br />
                      <br />
                      Collaborate with pre-selected partners, including{" "}
                      <span className="textpurple-600">
                        for-profit companies, startups, and non-profits,
                      </span>{" "}
                      in our upcoming Industry Phase 5.0 starting September
                      2023.
                    </p>
                  </div>
                  <div className="relative flex flex-col items-center space-y-8 text-center">
                    <div className="shadowpurple-800/20 relative mb-3 w-full rounded-lg shadow-md">
                      <Image
                        src="/assets/industry/zoom_industry.png"
                        className="rounded-lg grayscale"
                        layout="responsive"
                        width={100}
                        height={50}
                        alt={"Zoom Industry"}
                      />
                    </div>
                    <div className="my-3 rounded-lg bg-white p-8 shadow-lg shadow-blue-300/10">
                      <h1 className="text-xl font-medium text-gray-900">
                        <span>
                          Visit our official Projects Notion Page to learn more
                          about the individual projects and partner companies of
                          industry phase 5.0
                        </span>
                      </h1>
                      <div className="text-white">
                        <button
                          className="w-46 mt-5 rounded-full bg-blue-700 px-6 py-1 text-white duration-200 hover:bg-blue-400 sm:mx-4"
                          onClick={() =>
                            window.open(
                              "https://tum-ai.notion.site/TUM-ai-Industry-Phase-4-0-AI-Projects-8d1baf8b57e7493c954b5e7b275d74bc"
                            )
                          }
                        >
                          project page
                        </button>
                        <button
                          className="mx-4 mt-5 w-36 rounded-full bg-purple-700 px-6 py-1 text-white duration-200 hover:bg-purple-600"
                          onClick={() =>
                            window.open("https://industry.tum-ai.com/apply")
                          }
                        >
                          sign up now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </Tabs.Content>

          <Tabs.Content value="industry">
            <Section className="flex animate-fadeIn justify-center lg:flex-col">
              <div className="rounded-3xl shadow-purple-800/10 sm:bg-gray-50 sm:p-14 sm:shadow-lg">
                <h2 className="text-4xl font-semibold">
                  Industry Phase 5.0 starting in Fall 2023
                </h2>
                <hr className="border-b-1 my-4 border-gray-300" />
                <div className="mt-6 grid grid-cols-1 items-center gap-4 xl:grid-cols-2 xl:gap-16">
                  <div className="sm:px-12">
                    <h2 className="text-center text-xl sm:px-2">
                      We manage Munich&apos;s top pool of
                      <span className="font-bold text-purple-600">
                        {" "}
                        AI talent{" "}
                      </span>
                      and offer affordable, high-quality solutions without any
                      long-term liabilities!
                    </h2>
                    <div className="mt-8 flex flex-row items-center justify-center space-x-6">
                      <Dialog.Root>
                        <Dialog.Trigger className="rounded-full bg-purple-800 px-6 py-2 font-medium text-white duration-200 hover:bg-purple-700">
                          connect!
                        </Dialog.Trigger>
                        <Dialog.Portal>
                          <Dialog.Overlay className="fixed inset-0 flex items-center bg-blue-800/80 backdrop-blur-lg" />
                          <Dialog.Content className="container fixed left-[50%] top-[50%] mx-auto max-w-lg translate-x-[-50%] translate-y-[-50%] space-y-4 rounded-2xl bg-white p-8">
                            <Dialog.Title className="text-2xl font-bold text-purple-500">
                              Let&apos;s connect!
                            </Dialog.Title>
                            <p className="text-sm text-gray-700">
                              If you are interested in partnering with TUM.ai as
                              a sponsor, Makeathon challenge-setter, Industry
                              project partner, Workshop host, etc. please reach
                              out to our &quot;Partners & Sponsors&quot;
                              department.
                            </p>
                            <p className="text-xl font-medium text-purple-500">
                              <a href="mailto:partners@tum-ai.com">
                                partners@tum-ai.com
                              </a>
                            </p>
                            <p className="text-sm text-gray-500">
                              TUM.ai Student Initiative
                              <br />
                              Arcisstraße 21.
                              <br />
                              80333 Munich
                            </p>

                            <div className="flex justify-end">
                              <Dialog.Close asChild>
                                <Button className="text-white">Close</Button>
                              </Dialog.Close>
                            </div>
                          </Dialog.Content>
                        </Dialog.Portal>
                      </Dialog.Root>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-6 py-4">
                    <Image
                      src={"/assets/industry/freearifiat.png"}
                      className="rounded-xl shadow-lg shadow-purple-800/20"
                      layout="respinsive"
                      alt="Ferrari for Fiat"
                      width={500}
                      height={100}
                    />
                  </div>
                </div>
                <h2 className="mt-16 text-4xl font-semibold">
                  What is an <span className="text-purple-600">AI Project</span>
                  ?
                </h2>
                <hr className="border-b-1 my-4 border-gray-300" />
                <div className="mt-6 grid grid-cols-1 gap-10 py-6 xl:grid-cols-2 xl:gap-16">
                  <div>
                    <h2 className="text-2xl font-semibold text-purple-600">
                      Project Statement
                    </h2>
                    <p>
                      Present your AI-related problem – we&apos;ll help define
                      the ideal project:
                    </p>
                    <ol className="list-inside list-disc space-y-2 py-4 font-medium text-gray-700 sm:text-lg">
                      <li className="pl-2">Building proof of concept</li>
                      <li className="pl-2">Conducting research topics</li>
                      <li className="pl-2">Developing prototypes</li>
                      <li className="pl-2">Improving products/processes</li>
                    </ol>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-purple-600">
                      Outstanding Solutions
                    </h2>
                    <p className="max-w-lg py-2">
                      We’ll advertise your project to a wide pool of talented
                      students and present you with the most outstanding
                      candidates.
                    </p>
                    <p className="max-w-lg py-2">
                      A team of multi-disciplinary students will work
                      exclusively for your company as working students.
                    </p>
                  </div>
                </div>
              </div>
            </Section>
          </Tabs.Content>
        </Tabs.Root>

        <Section>
          <h1 className="mb-3 text-4xl font-semibold">
            Our partners from{" "}
            <span className="text-purple-600">Industry Phase 4.0</span>
          </h1>
          <hr className="my-12 border-gray-300 sm:my-8 md:my-10" />
          <div className="flex flex-wrap items-center justify-center">
            {partners.map((partner, index) => (
              <div
                className="px-4 py-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                key={index}
              >
                <Link href={partner.href} passHref>
                  <div
                    className="min-w-160 flex h-full items-center justify-center p-8 grayscale 
                        transition-all duration-200 ease-out hover:shadow-md hover:shadow-purple-800/5 hover:grayscale-0"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt || ""}
                      width={160}
                      height={50}
                      objectFit="contain"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Section>
        <Section className="my-12 bg-blue-700 shadow-lg shadow-purple-900/30">
          <div className="mx-auto w-full md:w-10/12">
            <h1 className="mb-3 hidden text-4xl font-semibold text-white md:block">
              Project Timeline
            </h1>
            <hr className="mb-8 mt-4 hidden border-white md:block" />
            <Image
              src="/assets/industry/industrytimelinefall2022_cropped.png"
              width={600}
              height={400}
              alt="Industry Timeline"
              className="w-full rounded-xl"
            />
          </div>
        </Section>
        <Section className="mb-12 sm:mt-20">
          <div className="justify-center sm:px-4">
            <h1 className="mb-3 text-4xl font-bold">
              Examples of previous AI Projects
            </h1>
            <h2 className="my-3 text-xl">
              Explore how our AI enthusiasts have created{" "}
              <span className="text-purple-600">measurable impact</span> in the
              past.
            </h2>
            <hr className="my-12 border-gray-300 sm:my-8 md:my-10" />
            <div className="3xl:grid-cols-4 grid grid-cols-1 gap-14 lg:grid-cols-2 2xl:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  className="rounded-lg bg-white shadow-lg shadow-purple-800/10"
                  key={index}
                >
                  <div className="flex h-full flex-col">
                    <div className="relative h-60 w-full grayscale saturate-200">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="rounded-b-lg bg-white p-6 text-purple-950">
                      <h1 className="mb-2 text-lg font-semibold">
                        {project.title}
                      </h1>
                      <p className="mb-2 flex-grow text-sm">
                        {project.description.map((section, index) => (
                          <span key={index}>
                            {section.text && `${section.text} `}
                            {section.link &&
                              section.link
                                .map((link, i) => (
                                  <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-700 underline"
                                  >
                                    {link.displayText}
                                  </a>
                                ))
                                .reduce(
                                  (prev, curr, i) =>
                                    i === 0 ? [curr] : [prev, ", ", curr],
                                  []
                                )}
                            {section.moreText && ` ${section.moreText}`}
                          </span>
                        ))}
                      </p>
                    </div>
                    <div className="mt-auto flex flex-col items-center justify-center space-y-3 px-6 pb-6 sm:flex-row sm:justify-start sm:space-y-0 md:space-x-2">
                      <Link href={project.organizationLink}>
                        <div className="min-w-30 flex max-w-max cursor-pointer items-center justify-center rounded-full bg-blue-700 px-4 py-1 text-purple-50 transition-colors duration-300 hover:bg-blue-400 hover:shadow-md">
                          {project.organization}
                        </div>
                      </Link>
                      <div className="flex min-w-min max-w-max items-center justify-center px-4 py-1 text-gray-400">
                        {project.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
