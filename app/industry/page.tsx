import Button from "@components/ui/button";
import Tabs from "@components/ui/Tabs";
import { partners_ip5, projects } from "data/industry";
import Image from "next/image";
import Link from "next/link";
import { bitter } from "../../styles/fonts";
import { cx } from "class-variance-authority";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TUM.ai - Industry Projects",
  description:
    "Work on real-world AI and Data solutions! 2250€ total compensation, 10 week working student arrangements, September 15th - end of November",
};

// Define project type based on the existing data structure
interface ProjectLink {
  url: string;
  displayText: string;
}

interface ProjectSection {
  text?: string;
  link?: ProjectLink[];
  moreText?: string;
}

interface Project {
  title: string;
  image: string;
  description: ProjectSection[];
  organization: string;
  organizationLink: string;
  time: string;
}

// Define the StudentsSection component inline
function StudentsSection() {
  return (
    <div className="animate-fadeIn p-6 md:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className={cx("mb-4 text-3xl font-semibold", bitter.className)}>
              {" "}
              <span className="text-purple-600">Industry Phase 6.0</span>
            </h2>

            <div className="space-y-4 text-gray-700">
              <p className="relative">
                <span className="relative z-10">
                  Push ML boundaries and progress your career with our AI
                  projects!
                </span>
                <span className="absolute top-0 -right-2 bottom-0 -left-2 -z-0 rounded-md bg-gradient-to-r from-purple-100/20 to-transparent"></span>
                <span className="font-medium text-purple-600">
                  {" "}
                  Leverage your skills{" "}
                </span>
                and take on real AI projects to test your abilities.
              </p>

              <p>
                Work in a
                <span className="font-medium text-purple-600">
                  {" "}
                  team of 4x students for 12 weeks, earn up to 4000€{" "}
                </span>
                and gain valuable contacts. With a project lead guiding you,
                demonstrate your agile project management skills in a
                professional setting.
              </p>
            </div>

            <Button intent="primary" className="mt-6" disabled={true}>
              <Link href="https://tum-ai.notion.site/TUM-ai-Industry-Phase-6-0-AI-Projects-d285a612b00b414ebe81458ef118e155">
                Apply Now
              </Link>
            </Button>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 -m-1 rounded-xl bg-gradient-to-br from-purple-300/10 to-blue-300/10 backdrop-blur-[2px]"></div>
              <div className="relative overflow-hidden rounded-lg border border-white/20 shadow-lg">
                <Image
                  src="/assets/industry/zoom_industry.png"
                  alt="Industry Phase Team Meeting"
                  width={600}
                  height={350}
                  className="w-full object-cover grayscale filter transition-all duration-700 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 to-blue-700/20"></div>
              </div>

              <div className="absolute -right-2 -bottom-2 h-32 w-32 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 blur-2xl"></div>
              <div className="absolute -top-2 -left-2 h-24 w-24 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20 blur-2xl"></div>
            </div>

            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-xs text-gray-500">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500"></span>
                Application phase has ended
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Industry() {
  return (
    <>
      {/* Fixed background elements */}
      <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
        <div className="bg-grid-slate-100 absolute top-0 left-0 h-full w-full opacity-5 [mask-image:linear-gradient(0deg,transparent,white)]" />
        <div className="absolute top-48 right-10 h-96 w-96 rounded-full bg-purple-400 opacity-10 blur-[120px]" />
        <div className="absolute top-[40vh] left-10 h-80 w-80 rounded-full bg-blue-300 opacity-10 blur-[100px]" />
        <div className="absolute right-48 bottom-48 h-64 w-64 rounded-full bg-indigo-400 opacity-10 blur-[80px]" />
      </div>

      {/* Hero Section */}
      <div className="relative h-[75vh] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/assets/industry/header/infineon_industry.jpeg"
            alt="Industry Projects Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-blue-900/70"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative z-10 w-full max-w-5xl px-6">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 w-full max-w-2xl">
                <Image
                  src="/assets/industry/header/industry_header_no_date.svg"
                  width={600}
                  height={150}
                  alt="Industry Projects"
                  className="w-full object-contain brightness-125 contrast-125 grayscale invert filter"
                />
              </div>
              <h2 className="mb-8 max-w-2xl text-2xl font-medium text-white md:text-3xl">
                Your stepping stone to a career in AI
              </h2>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform animate-bounce flex-col items-center">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Tabs Section - with glassmorphism effect */}
      <div
        id="students"
        className="relative bg-gradient-to-b from-white to-gray-50 py-16"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 grid grid-cols-16 grid-rows-16 gap-8 opacity-5">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="h-1 w-1 rounded-full bg-purple-500" />
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-xl border border-gray-100 bg-white/80 shadow-md backdrop-blur-sm">
            <Tabs
              tabs={{
                Students: StudentsSection(),
                Industry: IndustrySection(),
              }}
            />
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <section className="relative p-8 py-24 sm:py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="container mx-auto">
          <div className="relative z-10 mx-auto max-w-6xl px-4">
            <h2
              className={cx(
                "mb-12 text-center text-3xl font-semibold",
                bitter.className,
              )}
            >
              Our partners from{" "}
              <span className="text-purple-600">Industry Phase 5.0</span>
            </h2>

            <div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-4 lg:grid-cols-6">
              {partners_ip5.map((partner, index) => (
                <div
                  key={index}
                  className="flex transform items-center justify-center p-4 grayscale transition-all duration-300 hover:scale-105 hover:grayscale-0"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={120}
                    height={60}
                    className="h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative bg-gradient-to-r from-slate-50 to-white p-8 sm:py-16 lg:py-16">
        <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-purple-300/10 to-blue-300/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 h-64 w-64 rounded-full bg-gradient-to-tr from-blue-300/10 to-purple-300/5 blur-3xl"></div>
        <div className="container mx-auto">
          <div className="relative z-10 mx-auto max-w-6xl px-4">
            <div className="overflow-hidden rounded-xl border border-gray-100 shadow-lg">
              <Image
                src="/assets/industry/header/test_header.svg"
                width={1775}
                height={795}
                alt="Industry Timeline"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <div id="projects">
        <section className="relative bg-gradient-to-b from-white to-gray-50 p-8 py-24 sm:py-16 lg:py-24">
          <div className="container mx-auto">
            <div className="relative z-10 mx-auto max-w-6xl px-4">
              <div className="mb-16 flex flex-col items-center">
                <h2
                  className={cx(
                    "mb-4 text-center text-3xl font-semibold",
                    bitter.className,
                  )}
                >
                  Examples of previous AI Projects
                </h2>
                <p className="mb-2 max-w-2xl text-center text-gray-600">
                  Explore how our participants have created
                  <span className="text-purple-600"> measurable impact</span> in
                  the past.
                </p>
                <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-300 hover:translate-y-[-2px] hover:border-purple-100 hover:shadow-lg">
      {/* Glass-like top highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-white/80 via-purple-100/50 to-white/80"></div>
      {/* Glass-like left highlight */}
      <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/80 via-purple-100/50 to-white/80"></div>

      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>

      <div className="flex-1 p-6">
        <h3 className="mb-3 text-lg font-medium text-gray-900">
          {project.title}
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          {project.description.map((section, index) => (
            <div key={index}>
              {section.text && <span>{section.text} </span>}

              {!!section.link &&
                section.link.map((link, i) => (
                  <span key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 transition-colors hover:text-purple-800"
                    >
                      {link.displayText}
                    </a>
                    {i < section.link!.length - 1 && ", "}
                  </span>
                ))}
              {section.moreText && <span>{section.moreText}</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between p-6 pt-0">
        <Button intent="glassPurple" size="xs" asChild>
          <Link href={project.organizationLink}>{project.organization}</Link>
        </Button>
        <span className="text-xs text-gray-400">{project.time}</span>
      </div>
    </div>
  );
}

function IndustrySection() {
  return (
    <div id="industry" className="animate-fadeIn p-6 md:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className={cx("mb-6 text-3xl font-semibold", bitter.className)}>
              Industry Phase 6.0
              <span className="text-purple-600"> in spring 2023</span>
            </h2>
            <p className="mb-8 text-gray-700">
              We manage Munich&apos;s top pool of
              <span className="font-bold text-purple-600"> AI talent </span>
              and offer affordable, high-quality solutions without any long-term
              liabilities!
            </p>
            <Button intent="primary" disabled={true}>
              <Link href="mailto:partners@tum-ai.com">Connect with us</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 -m-1 rounded-2xl bg-gradient-to-br from-purple-100/20 to-blue-100/20 blur-sm"></div>
              <div className="relative overflow-hidden rounded-xl border border-white/20 shadow-lg">
                <Image
                  src="/assets/industry/freearifiat.png"
                  alt="Ferrari for Fiat"
                  width={500}
                  height={300}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className={cx("mb-8 text-2xl font-semibold", bitter.className)}>
            What is an <span className="text-purple-600">AI Project</span>?
          </h3>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="group relative overflow-hidden rounded-xl border border-white/60 bg-white/40 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md">
              {/* Subtle glass highlight effect */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-300/50 to-transparent"></div>
              <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-purple-300/50 to-transparent"></div>

              <h4 className="mb-4 flex items-center text-lg font-semibold text-purple-600">
                <span className="mr-2 inline-block h-4 w-1 rounded-full bg-purple-500"></span>
                Project Statement
              </h4>
              <p className="mb-4 text-gray-700">
                Present your AI-related problem – we&apos;ll help define the
                ideal project:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="mr-2 h-1 w-1 rounded-full bg-purple-500"></div>
                  Building proof of concept
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-1 w-1 rounded-full bg-purple-500"></div>
                  Conducting research topics
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-1 w-1 rounded-full bg-purple-500"></div>
                  Developing prototypes
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-1 w-1 rounded-full bg-purple-500"></div>
                  Improving products/processes
                </li>
              </ul>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-white/60 bg-white/40 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md">
              {/* Subtle glass highlight effect */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"></div>
              <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-blue-300/50 to-transparent"></div>

              <h4 className="mb-4 flex items-center text-lg font-semibold text-blue-600">
                <span className="mr-2 inline-block h-4 w-1 rounded-full bg-blue-500"></span>
                Outstanding Solutions
              </h4>
              <p className="mb-4 text-gray-700">
                We&apos;ll advertise your project to a wide pool of talented
                students and present you with the most outstanding candidates.
              </p>
              <p className="text-gray-700">
                A team of multi-disciplinary students will work exclusively for
                your company as working students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
