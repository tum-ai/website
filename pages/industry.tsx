import Image from "next/image";
import Link from "next/link";
import PictureHero from "../components/BannerHero";
import Section from "@ui/Section";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition, Popover } from "@headlessui/react";
import {
  UserGroupIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  ArrowLeftOnRectangleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

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
      image: "/assets/industry/project_cards/Unbenannt 2.jpg",
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

  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const options = [
    {
      name: "Students",
      description: "Your stepping stone to a career in AI",
      toTab: "tab1",
      icon: AcademicCapIcon,
    },
    {
      name: "Industry",
      description: "Present your AI-related problem – we'll help define the ideal project",
      toTab: "tab2",
      icon: BuildingOffice2Icon,
    },
  ];

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm transition-all" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-fulurple-50 sm:mx-0 sm:h-10 sm:w-10">
                        <UserGroupIcon
                          className="h-6 w-6 text-purple-500"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-xl font-semibold leading-6 text-purple-500"
                        >
                          Let's connect!
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-700">
                            If you are interested in partnering with TUM.ai as a
                            sponsor, Makeathon challenge-setter, Industry
                            project partner, Workshop host, etc. please reach
                            out to our "Partners & Sponsors" department.
                          </p>
                          <h2 className="mt-6 text-lg font-medium text-purple-500">
                            partners@tum-ai.com
                          </h2>
                          <p className="mt-6 text-sm text-gray-500">
                            <p className="text-sm text-gray-500">
                              TUM.ai Student Initiative
                            </p>
                            <p className="text-sm text-gray-500">
                              Arcisstraße 21.
                            </p>
                            <p className="text-sm text-gray-500">
                              80333 Munich
                            </p>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <PictureHero
        imageSrc="/assets/industry/header/infineon_industry.jpeg"
        titleImageSrc="/assets/industry/header/industry_header_no_date.svg"
        subtitle="Your stepping stone to a career in AI"
      />
      <div>
        <div className="container mx-auto -mb-8 flex justify-center md:hidden">
          {
            <Popover className="relative p-10">
              <Popover.Button className="inline-flex items-center gap-x-1 rounded-xl p-4 text-lg font-medium leading-6 text-purple-950 shadow-lg shadow-purple-900/10 ring-1 ring-gray-400/10 transition-all duration-300 hover:shadow-purple-900/20">
                <span>Options</span>
                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                  <div className="w-screen max-w-xl flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-xl ring-1 ring-gray-900/10">
                    <div className="p-4">
                      {options.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                          onClick={() => setActiveTab(item.toTab)}
                        >
                          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </h3>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      <a
                        key={"Sign up"}
                        href={"https://industry.tum-ai.com/apply"}
                        className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                      >
                        <ArrowLeftOnRectangleIcon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        Sign Up
                      </a>
                      <button
                        className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                        onClick={() => setOpen(true)}
                      >
                        <UserGroupIcon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        Connect
                      </button>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          }
        </div>
        <Section className="-mb-16 -mt-4 hidden flex-row justify-start text-xl md:flex">
          <h2 className="mr-8 inline-block font-medium text-gray-600">For</h2>
          <button
            className={`relative z-1 mx-4 border-b-2 px-1 py-3 text-left transition-all duration-500 ease-in-out ${
              activeTab === "tab1"
                ? "border-blue-300 text-blue-300"
                : "border-transparent text-gray-400 hover:border-gray-400 hover:text-gray-500"
            }`}
            onClick={() => setActiveTab("tab1")}
          >
            Students
          </button>
          <button
            className={`relative z-1 mx-4 border-b-2 px-1 py-3 text-left transition-all duration-500 ease-in-out ${
              activeTab === "tab2"
                ? "border-blue-300 text-blue-300"
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
              <Section className="flex animate-fadeIn justify-center">
                <div className="rounded-3xl sm:shadow-blue-500/20 sm:bg-gray-50 sm:p-14 sm:shadow-lg">
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
                        and take on real AI projects to test your abilities.
                        Join us now!
                        <br />
                        <br />
                        Work in a{" "}
                        <span className="text-purple-600">
                          team of 4x students for 12 weeks, earn 2700€
                        </span>{" "}
                        and gain valuable contacts. With a project lead guiding
                        you, demonstrate your agile project management skills in
                        a professional setting.
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
                      <div className="relative mb-3 w-full rounded-lg shadow-md shadowpurple-800/20">
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
                            "Visit our official Projects Notion Page to learn
                            more about the individual projects and partner
                            companies of industry phase 5.0"
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
            </>
          )}
          {activeTab === "tab2" && (
            <>
              <Section className="flex animate-fadeIn justify-center lg:flex-col">
                <div className="rounded-3xl sm:bg-gray-50 sm:p-14 sm:shadow-lg shadow-purple-800/10">
                  <h2 className="text-4xl font-semibold">
                    Industry Phase 5.0 starting in Fall 2023
                  </h2>
                  <hr className="border-b-1 my-4 border-gray-300" />
                  <div className="mt-6 grid grid-cols-1 items-center gap-4 xl:grid-cols-2 xl:gap-16">
                    <div className="sm:px-12">
                      <h2 className="sm:px-2 text-center text-xl">
                        We manage Munich's top pool of{" "}
                        <span className="font-bold text-purple-600">
                          AI talent
                        </span>{" "}
                        and offer affordable, high-quality solutions without any
                        long-term liabilities!
                      </h2>
                      <div className="mt-8 flex flex-row items-center justify-center space-x-6">
                        <button
                          className="rounded-full bg-purple-800 px-6 py-2 font-medium text-white duration-200 hover:bg-purple-700"
                          onClick={() => setOpen(true)}
                        >
                          connect!
                        </button>
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
                    What is an{" "}
                    <span className="text-purple-600">AI Project</span>?
                  </h2>
                  <hr className="border-b-1 my-4 border-gray-300" />
                  <div className="mt-6 grid grid-cols-1 gap-10 py-6 xl:grid-cols-2 xl:gap-16">
                    <div>
                      <h2 className="text-2xl font-semibold text-purple-600">
                        Project Statement
                      </h2>
                      <p>
                        Present your AI-related problem – we'll help define the
                        ideal project:
                      </p>
                      <ol className="list-inside list-disc space-y-2 py-4 sm:text-lg font-medium text-gray-700">
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
            </>
          )}
        </div>
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
              <span className="text-purple-600">
                measurable impact
              </span>{" "}
              in the past.
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
                    <div className="mt-auto flex flex-col space-y-3 sm:space-y-0 sm:flex-row justify-center sm:justify-start items-center space-x-2 px-6 pb-6">
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
