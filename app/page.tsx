import Button from "@components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { bitter } from "../styles/fonts";
import { cx } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "./hero";
import { Organization, WithContext } from "schema-dts";
import {
  initiatives_collabrated_with,
  partners_collabrated_with,
} from "data/partners";

export const metadata: Metadata = {
  title: "TUM.ai - Student Initiative focused on Artificial Intelligence",
  description:
    "TUM.ai is a student initiative based at the Technical University of Munich. We connect students and all relevant stakeholders to facilitate the application of AI across domains to drive positive societal impact through interdisciplinary projects. Together with our highly talented members, we organize Hackathons, Working Student Positions, Research Projects, Lectures, Workshops, Conferences and a Startup Incubator around Artificial Intelligence.",
};

// JSON-LD data for SEO
const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TUM.ai",
  legalName: "TUM.ai e.V.",
  alternateName: ["TUM.ai Student Initiative"],
  description:
    "TUM.ai is a student initiative based at the Technical University of Munich. We connect students and all relevant stakeholders to facilitate the application of AI across domains to drive positive societal impact through interdisciplinary projects. Together with our highly talented members, we organize Hackathons, Working Student Positions, Research Projects, Lectures, Workshops, Conferences and a Startup Incubator around Artificial Intelligence.",
  url: "https://www.tum-ai.com",
  logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/TUM.ai_Logo_Blue_%26_Violet.svg",
  sameAs: [
    "https://www.linkedin.com/company/tum-ai",
    "https://www.instagram.com/tum.ai_official/",
    "https://www.facebook.com/p/Tumai-100064870068663/",
    "https://x.com/TUMai_official",
    "https://www.youtube.com/@tum.aistudentinitiative",
    "http://www.wikidata.org/entity/Q128339659",
    "https://github.com/tum-ai",
    "https://www.crunchbase.com/organization/tum-ai",
    "https://www.reddit.com/r/TUM_ai/",
    "https://www.tiktok.com/@tum.ai_",
    "https://tum-ai.podbean.com/",
    "https://theorg.com/org/tum-ai",
    "https://www.eventbrite.de/o/tumai-31793295023",
  ],
  email: "contact@tum-ai.com",
  foundingDate: "2020",
  foundingLocation: "Munich, Germany",
  location: [
    {
      "@type": "PostalAddress",
      streetAddress: "Rosenheimer Str. 116A",
      postalCode: "81669",
      addressLocality: "Munich",
      addressCountry: "Germany",
      contactType: "Headquarters",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Arcisstraße 21",
      postalCode: "80333",
      addressLocality: "Munich",
      addressCountry: "Germany",
      contactType: "Registered office",
    },
  ],
  identifier: {
    "@type": "PropertyValue",
    name: "Register of Associations",
    value: "VR 210726",
  },
  department: [
    {
      "@type": "Organization",
      name: "Venture Department",
      description:
        "The Venture Department is the entrepreneurial arm of TUM.ai and organizes the AI Entrepreneurship Lab, a 14-week equity-free AI startup incubator.",
      url: "https://www.tum-ai.com/e-lab",
      contactPoint: {
        "@type": "ContactPoint",
        email: "venture@tum-ai.com",
        contactType: "Venture Department",
      },
      employee: {
        "@type": "EmployeeRole",
        roleName: "Head of Venture Department",
        employee: {
          "@type": "Person",
          name: "Laurenz Sommerlad",
          identifier: "laurenz-sommerlad",
          email: "laurenz.sommerlad@tum-ai.com",
          url: "https://www.tum-ai.com/e-lab/laurenz-sommerlad",
          sameAs: [
            "https://laurenzsommerlad.com",
            "https://www.linkedin.com/in/laurenzsommerlad/",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            email: "laurenz.sommerlad@tum-ai.com",
            contactType: "Head of Venture Department",
          },
        },
      },
    },
    // ... other departments
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "partners@tum-ai.com",
    contactType: "partner and sponsorship inquiries",
  },
};

export default function Index() {
  return (
    <>
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>

      {/* Decorative background elements */}
      <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
        <div className="bg-grid-slate-100 absolute top-0 left-0 h-full w-full opacity-5 [mask-image:linear-gradient(0deg,transparent,white)]" />
        <div className="absolute top-48 right-10 h-[15vw] max-h-72 w-[15vw] max-w-72 rounded-full bg-purple-400 opacity-10 blur-[clamp(40px,5vw,100px)]" />
        <div className="absolute top-96 left-10 h-[20vw] max-h-96 w-[20vw] max-w-96 rounded-full bg-blue-300 opacity-10 blur-[clamp(50px,6vw,120px)]" />
        <div className="absolute right-48 bottom-48 h-[15vw] max-h-64 w-[15vw] max-w-64 rounded-full bg-indigo-400 opacity-10 blur-[clamp(30px,4vw,80px)]" />
      </div>

      <Hero />

      {/* Programs Section */}
      <section className="relative overflow-hidden p-8 py-24 sm:py-16 lg:py-24">
        {/* Decorative dots */}
        <div className="pointer-events-none absolute inset-0 grid grid-cols-20 grid-rows-40 gap-8 opacity-5 md:grid-cols-40">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="h-1 w-1 rounded-full bg-purple-500"
              style={{
                transform: `translate(${Math.random() * 100}%, ${Math.random() * 100}%)`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto">
          <div className="relative mx-auto max-w-6xl px-4">
            <h2
              className={cx(
                "mb-16 text-center text-3xl font-semibold",
                bitter.className,
              )}
            >
              Our <span className="text-purple-600">Programs</span>
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {/* E-Lab Card */}
              <ProgramCard
                title="AI Entrepreneurship Lab"
                icon="/assets/home_img4.jpg"
                description="14-week equity-free AI startup incubator with full support from Munich's innovation ecosystem"
                link="/e-lab"
                cta="Learn more"
                status="Applications open in August"
              />

              {/* AI Academy Card */}
              <ProgramCard
                title="AI Academy"
                icon="/assets/home_img1.jpg"
                description="Advanced AI workshops with hands-on coding tutorials from exciting tech companies"
                link="https://education.tum-ai.com/"
                cta="Explore education"
                status="Open for everyone"
              />

              {/* Makeathon Card */}
              <ProgramCard
                title="Makeathon Competitions"
                icon="/assets/home_img2.png"
                description="48-hour AI product development hackathon solving real industry challenges"
                link="https://makeathon.tum-ai.com/"
                cta="View hackathons"
                status="Stay tuned for next event"
              />

              {/* Industry Projects Card */}
              <ProgramCard
                title="Industry Projects"
                icon="/assets/home_img3.png"
                description="Paid student teams implementing data-driven solutions for partner companies"
                link="/industry"
                cta="Explore projects"
                status="Applications closed"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 p-8 sm:py-16 lg:py-24">
        {/* Glass-like shapes */}
        <div className="absolute top-1/4 right-0 h-[20vw] max-h-64 w-[20vw] max-w-64 rounded-full bg-gradient-to-br from-purple-300/10 to-blue-300/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 h-[25vw] max-h-96 w-[25vw] max-w-96 rounded-full bg-gradient-to-tr from-blue-300/10 to-purple-300/5 blur-3xl"></div>

        <div className="container mx-auto">
          <div className="relative z-10 mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-16 lg:flex-row">
              <div className="lg:w-1/2">
                <h2
                  className={cx(
                    "mb-8 text-3xl font-semibold",
                    bitter.className,
                  )}
                >
                  Germany&apos;s leading
                  <br />
                  <span className="text-purple-600">AI student initiative</span>
                </h2>

                <div className="space-y-6 text-gray-700">
                  <p className="font-medium text-black">
                    With over 170 active members, TUM.ai connects students and
                    stakeholders to drive positive societal impact through AI.
                  </p>

                  <p>
                    Founded in 2020, TUM.ai thrives to deploy AI solutions into
                    new fields and industries, creating a diverse and inclusive
                    community of AI enthusiasts.
                  </p>

                  <p>
                    Together with our highly-talented members, we run data
                    science projects with industry partners, organize workshops,
                    and develop AI-powered solutions that address real-world
                    challenges.
                  </p>

                  <p>
                    We aim to lower the entry barriers to AI creation and usage
                    for people from every domain by establishing a platform for
                    practical experience through diverse applied AI projects.
                  </p>
                </div>

                <div className="mt-10">
                  <Button intent="primary" asChild>
                    <Link href="/members">
                      <span className="relative z-10">Meet our Members</span>
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 -m-1 rounded-2xl bg-gradient-to-br from-purple-100/20 to-blue-100/20 backdrop-blur-[2px]"></div>
                  <div className="absolute inset-1 overflow-hidden rounded-xl border border-white/20 shadow-lg">
                    <Image
                      src="/assets/aibootcamp.jpg"
                      alt="TUM.ai members collaborating"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900 p-8 text-white sm:py-16 lg:py-24">
        {/* Glowing orbs */}
        <div className="absolute top-20 right-20 h-[20vw] max-h-80 w-[20vw] max-w-80 rounded-full bg-purple-400/10 blur-[clamp(40px,5vw,100px)]"></div>
        <div className="absolute bottom-20 left-20 h-[20vw] max-h-80 w-[20vw] max-w-80 rounded-full bg-blue-400/10 blur-[clamp(40px,5vw,100px)]"></div>

        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 grid grid-cols-20 grid-rows-40 gap-8 md:grid-cols-40">
            {Array.from({ length: 80 }).map((_, i) => (
              <div key={i} className="h-1 w-1 rounded-full bg-white" />
            ))}
          </div>
        </div>

        <div className="container mx-auto">
          <div className="relative z-10 mx-auto max-w-6xl px-4">
            <div className="flex flex-col items-center gap-16 lg:flex-row">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 -m-1 rounded-2xl bg-gradient-to-br from-purple-300/10 to-blue-300/10 backdrop-blur-[2px]"></div>
                  <div className="absolute inset-1 overflow-hidden rounded-xl border border-white/10 shadow-lg">
                    <Image
                      src="/assets/partners/martin_talk.jpg"
                      alt="Industry collaboration"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-700/30 to-blue-700/40"></div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <h2
                  className={cx(
                    "mb-8 text-3xl font-semibold",
                    bitter.className,
                  )}
                >
                  For <span className="text-purple-300">Companies</span>
                </h2>

                <div className="space-y-6">
                  <p className="text-xl font-medium text-white">
                    Get access to our exclusive pre-selected talent pool of
                    qualified Software/Data Engineers and AI Strategists.
                  </p>

                  <p className="text-white/80">
                    Join TUM.ai as a sponsor or cooperation partner. Engage with
                    our community through workshops, speaker events, or as a
                    challenge setter for our Makeathon competitions.
                  </p>

                  <p className="text-white/80">
                    Looking for affordable, high-quality AI talent? Consider our
                    industry project format where student teams solve real-world
                    problems for your company.
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Button intent="primary" asChild>
                      <Link href="mailto:partners@tum-ai.com">
                        <span className="relative z-10">Become a Partner</span>
                      </Link>
                    </Button>

                    <Button
                      intent="glass"
                      asChild
                      className="rounded-md border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20"
                    >
                      <Link href="/partners">View our Partners</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative overflow-hidden p-8 py-24 sm:py-16 lg:py-24">
        {/* Glass-like glow */}
        <div className="absolute top-1/3 right-1/4 h-[25vw] max-h-96 w-[25vw] max-w-96 rounded-full bg-gradient-to-br from-purple-300/10 to-blue-300/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 h-[15vw] max-h-64 w-[15vw] max-w-64 rounded-full bg-gradient-to-tr from-blue-300/10 to-purple-300/5 blur-3xl"></div>

        <div className="container mx-auto">
          <div className="relative z-10 mx-auto max-w-6xl px-4">
            <h2
              className={cx(
                "mb-16 text-center text-3xl font-semibold",
                bitter.className,
              )}
            >
              Our <span className="text-purple-600">Partners</span>
            </h2>

            <div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-4 lg:grid-cols-6">
              {partners_collabrated_with.map((partner, index) => (
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

      {/* Initiative Partners Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 p-8 sm:py-16 lg:py-24">
        {/* Dot pattern background */}
        <div className="pointer-events-none absolute inset-0 opacity-5">
          <div className="absolute inset-0 grid grid-cols-20 grid-rows-40 gap-8 md:grid-cols-40">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className="h-1 w-1 rounded-full bg-purple-500" />
            ))}
          </div>
        </div>

        <div className="container mx-auto">
          <div className="relative z-10 mx-auto max-w-6xl px-4">
            <h2
              className={cx(
                "mb-16 text-center text-3xl font-semibold",
                bitter.className,
              )}
            >
              Partner <span className="text-purple-600">Initiatives</span>
            </h2>

            <div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-4 lg:grid-cols-6">
              {initiatives_collabrated_with.map((initiative, index) => (
                <div
                  key={index}
                  className="flex transform items-center justify-center p-4 grayscale transition-all duration-300 hover:scale-105 hover:grayscale-0"
                >
                  <Image
                    src={initiative.src}
                    alt={initiative.alt}
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

      {/* Slack Section */}
      <section className="relative overflow-hidden p-8 sm:py-16 lg:py-24">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/40"></div>

        {/* Mesh grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>

        <div className="container mx-auto">
          <div className="relative z-10 mx-auto max-w-6xl px-4">
            <div className="flex flex-col items-center">
              {/* Main card */}
              <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-white/80 to-white/40 shadow-xl backdrop-blur-sm">
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>

                {/* Top highlight */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-300/50 to-transparent"></div>

                {/* Left highlight */}
                <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/80 to-transparent"></div>

                <div className="relative px-8 py-14 md:px-14">
                  <div className="text-center">
                    <h2
                      className={cx(
                        "mb-6 bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-4xl font-bold text-transparent",
                        bitter.className,
                      )}
                    >
                      Join our Community
                    </h2>

                    <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-600">
                      Be among the first to be informed about upcoming events,
                      job opportunities, and workshops in our vibrant AI
                      community.
                    </p>

                    <div className="relative">
                      <Link
                        href="https://join.slack.com/t/tumaipublic/shared_invite/zt-10kg0t1f9-JLRXDxY_d_vprKWgab0cVw"
                        className="group relative flex items-center gap-3 overflow-hidden rounded-xl px-8 py-4 font-medium text-white"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300 group-hover:scale-105"></span>
                        <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
                        <span className="absolute inset-0 rounded-xl border border-white/20"></span>
                        <span className="relative flex items-center gap-3">
                          <FontAwesomeIcon
                            icon={faSlack}
                            size="lg"
                            className="text-white/90"
                          />
                          <span>Join TUM.ai Public Slack</span>
                          <svg
                            className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </span>
                      </Link>

                      {/* Button shadow/glow */}
                      <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-r from-purple-600/30 to-indigo-600/30 opacity-70 blur-xl"></div>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-1 text-sm text-slate-500">
                      <span className="opacity-70">
                        By joining, you agree to our
                      </span>
                      <Link
                        className="font-medium text-purple-600 transition-colors hover:text-purple-700 hover:underline"
                        href="/data-privacy"
                      >
                        Terms & Privacy Policy
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Program Card Component
function ProgramCard({
  title,
  icon,
  description,
  link,
  cta,
  status,
}: {
  title: string;
  icon: string;
  description: string;
  link: string;
  cta: string;
  status: string;
}) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-2px] hover:border-purple-100 hover:shadow-xl">
      {/* Glass-like top highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-white/80 via-purple-100/50 to-white/80"></div>
      {/* Glass-like left highlight */}
      <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/80 via-purple-100/50 to-white/80"></div>

      <div className="relative h-48 overflow-hidden">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-3 text-lg font-medium text-gray-900">{title}</h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600">
          {description}
        </p>

        <div className="mt-auto space-y-3">
          {status && (
            <div className="flex items-center">
              <span className="mr-2 h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-purple-500"></span>
              <p className="text-xs font-medium text-purple-600">{status}</p>
            </div>
          )}

          <Link
            href={link}
            className="-transform inline-flex items-center text-sm font-medium text-purple-600 transition-colors duration-300 group-hover:translate-x-0.5 hover:text-purple-800"
          >
            {cta}
            <svg
              className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
