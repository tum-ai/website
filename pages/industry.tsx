import Logos from "@components/Logos";
import Button from "@components/ui/Button";
import Dialog from "@components/ui/Dialog";
import Tabs from "@components/ui/Tabs";
import Section from "@ui/Section";
import { partners, projects } from "data/industry";
import Image from "next/image";
import Link from "next/link";
import PictureHero from "../components/BannerHero";

export default function Industry() {
  return (
    <>
      <PictureHero
        imageSrc="/assets/industry/header/infineon_industry.jpeg"
        titleImageSrc="/assets/industry/header/industry_header_no_date.svg"
        subtitle="Your stepping stone to a career in AI"
      />
      <Tabs data={{
        "students": <StudentsSection />,
        "Industry": <IndustrySection />
      }} />
      <Section>
        <h1 className="mb-3 text-4xl font-semibold">
          Our partners from{" "}
          <span className="text-purple-600">Industry Phase 4.0</span>
        </h1>
        <hr className="my-12 border-gray-300 sm:my-8 md:my-10" />
        <Logos data={partners} />
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
    </>
  );
}


function StudentsSection() {
  return <Section className="flex animate-fadeIn justify-center">
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
}

function IndustrySection() {
  return <Section className="flex animate-fadeIn justify-center lg:flex-col">
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
            <Dialog content={{
              trigger: <>connect!</>,
              title: <>Let&apos;s connect!</>,
              body: <><p className="text-sm text-gray-700">
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
                </p></>,
              close: <Button className="text-white">Close</Button>
            }} />
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
}