import Logos from "@components/Logos";
import Button from "@components/ui/Button";
import Dialog from "@components/ui/Dialog";
import Tabs from "@components/ui/Tabs";
import Section from "@ui/Section";
import { partners, projects } from "data/industry";
import Image from "next/image";
import Link from "next/link";
import PictureHero from "../components/BannerHero";
import Head from "next/head";
import { bitter } from "@styles/fonts";
import { cx } from "class-variance-authority";

export default function Industry() {
  return (
    <>
      <Head>
        <title>TUM.ai - Industry</title>
        <meta
          name="description"
          content="Work on real-world AI and Data solutions! 2250€ total compensation, 10 week working student arrangements, September 15th - end of November"
        />
      </Head>
      <PictureHero
        imageSrc="/assets/industry/header/infineon_industry.jpeg"
        titleImageSrc="/assets/industry/header/industry_header_no_date.svg"
        subtitle="Your stepping stone to a career in AI"
      />
      <Tabs
        tabs={{
          Students: <StudentsSection />,
          Industry: <IndustrySection />,
        }}
      />
      <Section>
        <h2 className={cx("mb-12 text-4xl font-semibold", bitter.className)}>
          Our partners from{" "}
          <span className="text-purple-600">Industry Phase 4.0</span>
        </h2>
        <Logos logos={partners} />
      </Section>
      <Section>
        <Image
          src="/assets/industry/header/test_header.svg"
          width={1775}
          height={795}
          alt="Industry Timeline"
          className="w-full"
        />
      </Section>
      <Section>
        <div className="justify-center sm:px-4">
          <h2 className={cx("mb-4 text-4xl font-semibold", bitter.className)}>
            Examples of previous AI Projects
          </h2>
          <p className="mb-8">
            Explore how our participants have created{" "}
            <span className="text-purple-600">measurable impact</span> in the
            past.
          </p>
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
                      fill
                      className="rounded-t-lg object-cover"
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
  return (
    <Section className="flex animate-fadeIn justify-center">
      <div className="rounded-3xl sm:bg-gray-50 sm:p-14 sm:shadow-lg sm:shadow-blue-500/20">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-16">
          <div className="space-y-4">
            <h2 className={cx("mb-8 text-4xl font-semibold", bitter.className)}>
              Applications for Industry Phase 5.0 will open in summer
            </h2>
            <p>
              Push ML boundaries and progress your career with our AI projects!{" "}
              <span className="text-purple-600">Leverage your skills</span> and
              take on real AI projects to test your abilities. Join us now!
            </p>
            <p>
              Work in a{" "}
              <span className="text-purple-600">
                team of 4x students for 12 weeks, earn 2700€
              </span>{" "}
              and gain valuable contacts. With a project lead guiding you,
              demonstrate your agile project management skills in a professional
              setting.
            </p>
            <p>
              Collaborate with pre-selected partners, including{" "}
              <span className="textpurple-600">
                for-profit companies, startups, and non-profits,
              </span>{" "}
              in our upcoming Industry Phase 5.0 starting September 2023.
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
            <div className="my-3 space-y-8 rounded-lg  p-8">
              <p>
                Visit our official Projects Notion Page to learn more about the
                individual projects and partner companies of industry phase 5.0
              </p>
              <div className="flex flex-col justify-center text-white sm:flex-row sm:space-x-4">
                <Button asChild>
                  <Link href="https://industry.tum-ai.com/apply">
                    Sign up now
                  </Link>
                </Button>
                <Button asChild intent="tertiary">
                  <Link href="https://tum-ai.notion.site/TUM-ai-Industry-Phase-4-0-AI-Projects-8d1baf8b57e7493c954b5e7b275d74bc">
                    Project page
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function IndustrySection() {
  return (
    <Section className="flex animate-fadeIn justify-center lg:flex-col">
      <div className="rounded-3xl shadow-purple-800/10 sm:bg-gray-50 sm:p-14 sm:shadow-lg">
        <h2 className={cx("mb-8 text-4xl font-semibold", bitter.className)}>
          Industry Phase 5.0 starting in Fall 2023
        </h2>
        <div className="grid grid-cols-1 items-center gap-4 xl:grid-cols-2 xl:gap-16">
          <div>
            <p className="mb-8">
              We manage Munich&apos;s top pool of
              <span className="font-bold text-purple-600"> AI talent </span>
              and offer affordable, high-quality solutions without any long-term
              liabilities!
            </p>
            <Dialog
              trigger={<Button>connect!</Button>}
              title="Let's connect!"
              body={
                <>
                  <p className="text-sm text-gray-700">
                    If you are interested in partnering with TUM.ai as a
                    sponsor, Makeathon challenge-setter, Industry project
                    partner, Workshop host, etc. please reach out to our
                    &quot;Partners & Sponsors&quot; department.
                  </p>
                  <p className="text-xl font-medium text-purple-500">
                    <a href="mailto:partners@tum-ai.com">partners@tum-ai.com</a>
                  </p>
                  <p className="text-sm text-gray-500">
                    TUM.ai Student Initiative
                    <br />
                    Arcisstraße 21.
                    <br />
                    80333 Munich
                  </p>
                </>
              }
              hasCloseButton
            />
          </div>
          <div className="flex flex-col items-center space-y-6 py-4 xl:items-start">
            <Image
              src={"/assets/industry/freearifiat.png"}
              className="rounded-xl shadow-lg shadow-purple-800/20"
              alt="Ferrari for Fiat"
              width={500}
              height={100}
            />
          </div>
        </div>

        <div className="mt-16 ">
          <h3 className={cx("mb-8 text-3xl font-semibold")}>
            What is an <span className="text-purple-600">AI Project</span>?
          </h3>
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-16">
            <div>
              <h4 className="text-xl font-semibold text-purple-600">
                Project Statement
              </h4>
              <p>
                Present your AI-related problem – we&apos;ll help define the
                ideal project:
              </p>
              <ol className="list-inside list-disc space-y-2 py-4 ">
                <li className="pl-2">Building proof of concept</li>
                <li className="pl-2">Conducting research topics</li>
                <li className="pl-2">Developing prototypes</li>
                <li className="pl-2">Improving products/processes</li>
              </ol>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-600">
                Outstanding Solutions
              </h4>
              <p className="max-w-lg py-2">
                We’ll advertise your project to a wide pool of talented students
                and present you with the most outstanding candidates.
              </p>
              <p className="max-w-lg py-2">
                A team of multi-disciplinary students will work exclusively for
                your company as working students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
