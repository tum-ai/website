import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PictureHero from "../components/BannerHero";
import Button from "@ui/Button";
import Section from "@ui/Section";

export default function Industry() {
  const [activeTab, setActiveTab] = useState("tab1");
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
          text: "The Institute for Diagnostic and Interventional Radiology performs and evaluates examinations using ultrasound, conventional X-ray technology, CT and MRI.&nbsp;Project participants collaborated with radiologists to learn about the specifics of medical imaging formats (such as DICOM) and the basics of medical knowledge required for the task.",
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
          text: "During this project we contributed to Leevi's mission of providing digital health solutions for infants.&nbsp;Leevi helps parents accurately understand the wellbeing of their babies through individual insights via a wearable bracelet that collects the babies vital and sleep parameters.",
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
      image: "/assets/industry/project_cards/presize-Logo.jpg",
      description: [
        {
          text: "&nbsp;We created a recommender system for clothing sizes and benchmarked it against Presize’s own technology. This way we actively contributed of Presize's s vision of reducing the amount of paercel-returns.",
        },
      ],
      organization: "presize.ai",
      organizationLink: "https://www.presize.ai/",
      time: "fall 2021",
    },
    {
      title: "Heimkapital - Real estate price prediction",
      image: "/assets/industry/project_cards/heimkapital.png",
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
      image: "/assets/industry/project_cards/dynagroup.png",
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
        <Section className="-mb-16 -mt-4 flex flex-row justify-start text-2xl">
          <h2 className="mr-8 inline-block font-semibold text-gray-700">For</h2>
          <button
            className={`relative z-10 border-b-2 px-5 py-4 text-left transition-all duration-500 ease-in-out ${
              activeTab === "tab1"
                ? "border-primary-700 text-primary-700"
                : "border-transparent text-gray-400 hover:border-gray-400 hover:text-gray-500"
            }`}
            onClick={() => setActiveTab("tab1")}
          >
            Students
          </button>
          <button
            className={`relative z-10 border-b-2 px-5 py-4 text-left transition-all duration-500 ease-in-out ${
              activeTab === "tab2"
                ? "border-primary-700 text-primary-700"
                : "border-transparent text-gray-400 hover:border-gray-400 hover:text-gray-500"
            }`}
            onClick={() => setActiveTab("tab2")}
          >
            Industry
          </button>
          <hr className="-mt-[2px] w-full border-b-[1px] border-gray-200" />
        </Section>
        <div>
          {activeTab === "tab1" && (
            <>
              <Section className="flex animate-fadeIn justify-center lg:flex-col">
                <div className="rounded-3xl bg-gray-50 p-14 shadow-lg shadow-primary-800/10">
                  <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-16">
                    <div>
                      <h2 className="mb-6 text-3xl font-semibold">
                        Applications for Industry Phase 5.0 will open in summer
                      </h2>
                      <hr className="border-b-1 my-6 border-gray-300"/>
                      <p className="mb-8 text-xl">
                        Push ML boundaries and progress your career with our AI
                        projects!{" "}
                        <span className="text-primary-500">
                          Leverage your skills
                        </span>{" "}
                        and take on real AI projects to test your abilities.
                        Join us now!
                        <br />
                        <br />
                        Work in a{" "}
                        <span className="text-primary-500">
                          team of 4x students for 12 weeks, earn 2700€
                        </span>{" "}
                        and gain valuable contacts. With a project lead guiding
                        you, demonstrate your agile project management skills in
                        a professional setting.
                        <br />
                        <br />
                        Collaborate with pre-selected partners, including{" "}
                        <span className="text-primary-500">
                          for-profit companies, startups, and non-profits,
                        </span>{" "}
                        in our upcoming Industry Phase 5.0 starting September
                        2023.
                      </p>
                    </div>
                    <div className="relative flex flex-col items-center space-y-8 text-center">
                      <div className="relative mb-3 w-full rounded-lg shadow-md shadow-primary-800/20">
                        <Image
                          src="/assets/industry/zoom_industry.png"
                          className="rounded-lg grayscale"
                          layout="responsive"
                          width={100}
                          height={50}
                          alt={"Zoom Industry"}
                        />
                      </div>
                      <div className="my-3 rounded-lg bg-white p-8 shadow-lg shadow-primary-500/10">
                        <h1 className="text-xl font-semibold text-gray-900">
                          <span className="text-primary-500">"</span>
                          <span>Visit our official </span>
                          <span className="text-primary-500">
                            Projects Notion Page
                          </span>
                          <span> to learn more about the individual </span>
                          projects and partner companies{" "}
                          <span>of industry phase 5.0</span>
                          <span className="text-primary-400">" 🤙🏼</span>
                        </h1>
                        <div className="text-white">
                          <button className="w-46 mx-4 mt-5 rounded-full bg-primary-800 px-6 py-1 text-white duration-200 hover:bg-primary-600">
                            view project page
                          </button>
                          <button className="mx-4 mt-5 w-36 rounded-full bg-primary-500 px-6 py-1 text-white duration-200 hover:bg-primary-400">
                            sign up now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Section>
            </>
          )}
          {activeTab === "tab2" && (
            <>
              <Section className="flex animate-fadeIn justify-center lg:flex-col">
                <div className="rounded-3xl bg-gray-50 p-14 shadow-lg shadow-primary-800/10">
                  <h2 className="text-3xl font-semibold">
                    Industry Phase 5.0 starting in Fall 2023
                  </h2>
                  <hr className="border-b-1 my-4 border-gray-300"/>
                  <div className="mt-6 grid grid-cols-1 items-center gap-4 xl:grid-cols-2 xl:gap-16">
                    <div className="px-12">
                      <h2 className="text-center text-xl px-2">
                        We manage Munich's top pool of{" "}
                        <span className="font-bold text-primary-500">
                          AI talent
                        </span>{" "}
                        and offer affordable, high-quality solutions without any
                        long-term liabilities!
                      </h2>
                      <div className="flex flex-row items-center justify-center space-x-6 p-6">
                        <Button className="text-white">Get Access!</Button>
                        <h3 className="text-xl font-semibold text-primary-950">
                          industry@tum-ai.de
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-6 py-4">
                      <h2 className="text-center text-3xl font-semibold">
                        For{" "}
                        <span className="text-primary-500">future partner</span>{" "}
                        companies
                      </h2>
                      <Image
                        src={"/assets/industry/freearifiat.png"}
                        className="rounded-xl shadow-lg shadow-primary-800/20"
                        layout="respinsive"
                        alt="Ferrari for Fiat"
                        width={500}
                        height={100}
                      />
                    </div>
                  </div>
                  <h2 className="mt-16 text-3xl font-semibold">
                    What is an{" "}
                    <span className="text-primary-500">AI Project</span>?
                  </h2>
                  <hr className="border-b-1 my-4 border-gray-300"/>
                  <div className="mt-6 grid grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-16 py-6">
                    <div className="px-12">
                      <h2 className="text-2xl font-semibold text-primary-500">Project Statement</h2>
                      <p>Present your AI-related problem – we'll help define the ideal project:</p>
                      <ol className="text-lg list-inside list-disc space-y-2 font-medium text-gray-700 py-4 px-6">
                        <li className="pl-2">Building proof of concept</li>
                        <li className="pl-2">Conducting research topics</li>
                        <li className="pl-2">Developing prototypes</li>
                        <li className="pl-2">Improving products/processes</li>
                      </ol>
                    </div>
                    <div className="px-12">
                      <h2 className="text-2xl font-semibold text-primary-500">Outstanding Solutions</h2>
                      <p className="py-2 max-w-lg">
                        We’ll advertise your project to a wide pool of talented students and
                        present you with the most outstanding candidates.
                      </p>
                      <p className="py-2 max-w-lg">
                        A team of multi-disciplinary students will work exclusively for your company
                        as working students.
                      </p>
                    </div>
                  </div>
                </div>
              </Section>
            </>
          )}
          {activeTab === "tab3" && <p>Content for tab 3.</p>}
        </div>
        <Section>
          <h1 className="mb-3 text-3xl font-semibold">
            Our partners from{" "}
            <span className="text-primary-500">Industry Phase 4.0</span>
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
                        transition-all duration-200 ease-out hover:shadow-md hover:grayscale-0"
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
        <Section className="my-12 bg-gradient-to-br from-primary-800 to-primary-950 pt-4 shadow-lg shadow-primary-900/40">
          <div className="mx-auto flex justify-center sm:py-6 md:py-8 lg:py-14">
            <Image
              src="/assets/industry/industrytimelinefall2022.png"
              width={500}
              height={300}
              alt="Industry Timeline"
              className="w-9/12 rounded-xl"
            />
          </div>
        </Section>
        <Section className="mb-12 mt-20">
          <div className="justify-center px-4">
            <h1 className="mb-3 text-3xl font-bold">
              Examples of previous AI Projects
            </h1>
            <h2 className="my-3 text-xl">
              Explore how our AI enthusiasts have created{" "}
              <span className="font-semibold text-primary-500">
                measurable impact
              </span>{" "}
              in the past.
            </h2>
            <hr className="my-12 border-gray-300 sm:my-8 md:my-10" />
            <div className="3xl:grid-cols-4 grid grid-cols-1 gap-14 lg:grid-cols-2 2xl:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  className="rounded-lg bg-white shadow-lg shadow-primary-800/10"
                  key={index}
                >
                  <div className="flex h-full flex-col">
                    <div className="relative h-48 w-full grayscale">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="rounded-b-lg bg-white p-6 text-primary-950">
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
                                    className="text-primary-700 underline"
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
                    <div className="mt-auto flex justify-between space-x-2 px-6 pb-6 sm:flex-col sm:space-x-0 sm:space-y-2 lg:flex-col">
                      <div className="flex space-x-2">
                        <Link href={project.organizationLink}>
                          <div className="min-w-30 flex max-w-max cursor-pointer items-center justify-center rounded-full bg-primary-800 px-4 py-1 text-primary-50 transition-colors duration-300 hover:bg-primary-500">
                            Visit {project.organization}
                          </div>
                        </Link>
                        <div className="flex min-w-min max-w-max items-center justify-center px-4 py-1 text-gray-400">
                          {project.time}
                        </div>
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
