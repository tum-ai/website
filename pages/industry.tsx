import Header2 from "../components/02_molecules/Header2.js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Industry() {
  const [activeTab, setActiveTab] = useState("tab1");
  const partners = [
    { href: "https://www.atoss.com/de", src: "/assets/industry/ATOSS.png" },
    {
      href: "https://www.hypovereinsbank.de",
      src: "/assets/industry/partners/HVB_2.png",
      alt: "atoss",
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
      alt: "",
    },
    {
      href: "https://neuralprophet.com",
      src: "/assets/industry/partners/neuralprophet_logo.png",
    },
    { href: "https://eyeo.com", src: "/assets/industry/partners/eyeo.png" },
    {
      href: "https://gruppe.schwarz",
      src: "/assets/industry/partners/schwarzgroup_edit.png",
    },
    {
      href: "https://www.rohde-schwarz.com/de",
      src: "/assets/industry/partners/RandS.png",
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
          text: "The Institute for Diagnostic and Interventional Radiology performs and evaluates examinations using ultrasound, conventional X-ray technology, CT and MRI.&nbsp;Project participants collaborated with radiologists to learn about the specifics of medical imaging formats (such as DICOM) and the basics of medical knowledge required for the task.&nbsp;",
          // Update with links and moreText when more details available
        },
      ],
      organization: "TUM MRI Radiology",
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
      <Header2
        imageSrc={"/assets/industry/header/industry_header_no_date.svg"}
        title={undefined}
        subtitle={undefined}
      />
      <div>
        <ul className="flex overflow-hidden">
          <li
            className={`${
              activeTab === "tab1" ? "w-3/5" : "w-2/5"
            } transform transition-all duration-200 ease-in-out`}
          >
            <button
              className={`w-full rounded px-4 py-2 text-center text-lg font-bold ${
                activeTab === "tab1"
                  ? "border border-b-2 border-transparent bg-gradient-to-r from-primary-800 from-10% to-primary-500 to-80% text-white"
                  : "border border-b-2 border-transparent border-b-primary-500 bg-white text-primary-900 hover:border-gray-300 hover:border-b-primary-500"
              } transition-all duration-500`}
              onClick={() => setActiveTab("tab1")}
            >
              For Students
            </button>
          </li>
          <li
            className={`${
              activeTab === "tab2" ? "w-3/5" : "w-2/5"
            } transform transition-all duration-200 ease-in-out`}
          >
            <button
              className={`w-full rounded px-4 py-2 text-center text-lg font-bold ${
                activeTab === "tab2"
                  ? "border border-b-2 border-transparent bg-gradient-to-l from-primary-800 from-10% to-primary-500 to-80% text-white"
                  : "border border-b-2 border-transparent border-b-primary-500 bg-white text-primary-900 hover:border-gray-300 hover:border-b-primary-500"
              } transition-all duration-500`}
              onClick={() => setActiveTab("tab2")}
            >
              For Industry
            </button>
          </li>
        </ul>
        <div className="mt-8">
          {activeTab === "tab1" && (
            <>
              <section
                id="recordings"
                className="mx-16 my-14 flex animate-fadeIn justify-center rounded-3xl bg-gray-50 py-14"
              >
                <div className="mx-2 px-2 sm:px-4 lg:px-8 xl:px-16">
                  <h1 className="mb-14 bg-gradient-to-r from-primary-950 to-primary-800 to-40% bg-clip-text text-center text-4xl font-bold uppercase text-transparent">
                    Your stepping stone to a career in AI
                  </h1>
                  <div className="grid grid-cols-1 gap-0 px-8 md:grid-cols-2 lg:px-16">
                    <div className="px-12">
                      <h2 className="mb-6 text-2xl font-bold">
                        Applications for Industry Phase 5.0 will open in summer
                      </h2>
                      <p className="mb-8 text-xl">
                        Push ML boundaries and progress your career with our AI
                        projects!{" "}
                        <strong className="font-semibold text-primary-700">
                          Leverage your skills
                        </strong>{" "}
                        and take on real AI projects to test your abilities.
                        Join us now!
                        <br />
                        <br />
                        Work in a{" "}
                        <strong className="font-semibold text-primary-700">
                          team of 4x students for 12 weeks, earn 2700€
                        </strong>{" "}
                        and gain valuable contacts. With a project lead guiding
                        you, demonstrate your agile project management skills in
                        a professional setting.
                        <br />
                        <br />
                        Collaborate with pre-selected partners, including{" "}
                        <strong className="font-semibold text-primary-700">
                          for-profit companies, startups, and non-profits,
                        </strong>{" "}
                        in our upcoming Industry Phase 5.0 starting September
                        2023.
                      </p>
                    </div>
                    <div className="relative flex flex-col items-center px-12 text-center">
                      <div className="relative mb-3 h-64 w-full">
                        <Image
                          src="/assets/industry/zoom_industry.png"
                          className="rounded-lg grayscale"
                          fill={true}
                          alt={"Zoom Industry"}
                        />
                      </div>
                      <div className="my-3 rounded-lg bg-white p-8">
                        <h1 className="text-2xl font-bold text-gray-900">
                          <span className="text-primary-500">"</span>
                          <span>Visit our official </span>
                          <span className="text-primary-500">
                            Projects Notion Page
                          </span>
                          <span> to learn more about the individual </span>
                          projects and partner companies{" "}
                          <span>of industry phase 5.0</span>
                          <span className="text-primary-600">" 🤙🏼</span>
                        </h1>
                        <div className="text-white">
                          <button className="mx-4 mt-5 w-56 rounded-full bg-primary-800 px-8 py-2 font-bold text-white duration-500 hover:bg-primary-600">
                            view project page
                          </button>
                          <button className="mx-4 mt-5 w-44 rounded-full bg-primary-500 px-8 py-2 font-bold text-white duration-500 hover:bg-primary-400">
                            sign up now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="mx-16 my-14 px-5 py-6" id="partners_industry">
                <h1 className="mb-14 text-center text-4xl font-bold">
                  Our partners from&nbsp;
                  <span className="text-primary-500">Industry Phase 4.0</span>
                </h1>
                <hr className="my-12 border-gray-300 sm:my-8 md:my-10" />
                <div className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                  {partners.map((partner, index) => (
                    <div>
                      <Link href={partner.href} key={index}>
                        <div className="flex h-full items-center justify-center p-8 grayscale hover:grayscale-0">
                          <Image
                            src={partner.src}
                            alt={partner.alt}
                            height={50}
                            width={160}
                            objectFit="contain"
                            layout="intrinsic"
                          />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
          {activeTab === "tab2" && <p>Content for tab 2.</p>}
          {activeTab === "tab3" && <p>Content for tab 3.</p>}
        </div>
        <section className="my-4 bg-gradient-to-br from-primary-800 to-primary-950">
          {/*<div className="h-2 bg-gradient-to-r from-primary-800 from-5% via-primary-500 via-30% to-primary-300 to-90%" />*/}
          <div className="mx-auto flex justify-center sm:py-6 md:py-8 lg:py-14">
            <Image
              src="/assets/industry/industrytimelinefall2022.png"
              width={500}
              height={300}
              alt="Industry Timeline"
              className="w-9/12 rounded-xl"
            />
          </div>
        </section>
        <section className="py-16">
          <div className="justify-center mx-16 px-4">
            <h1 className="mb-3 text-4xl font-bold">
              Examples of previous AI Projects
            </h1>
            <h2 className="my-3 text-2xl">
              Explore how our AI enthusiasts have created{" "}
              <span className="font-semibold text-primary-500">
                measurable impact
              </span>{" "}
              in the past.
            </h2>
            <hr className="my-12 border-gray-300 sm:my-8 md:my-10" />
            <div className="grid grid-cols-1 gap-14 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {projects.map((project, index) => (
                <div className="rounded-lg bg-white shadow-xl" key={index}>
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
                      <h1 className="mb-2 text-lg font-bold">
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
                          <div className="flex min-w-min max-w-max cursor-pointer items-center justify-center rounded-full bg-primary-800 px-4 py-1 text-primary-50 transition-colors duration-500 hover:bg-primary-500">
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
        </section>
      </div>
    </>
  );
}
