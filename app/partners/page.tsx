import Button from "@components/ui/Button";
import Image from "next/image";
import MartinTalk from "@public/assets/partners/martin_talk.jpg";
import { cx } from "class-variance-authority";
import { bitter } from "@styles/fonts";
import Link from "next/link";
import { Heart, Megaphone, Handshake, Users } from "lucide-react";
import Benefits from "@components/Benefit";
import Logos from "@components/Logos";
import {
  enablers_supporters,
  project_partners,
  strategic_partnerts,
} from "data/partners";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TUM.ai - Partners",
  description:
    "Is your company currently facing challenges with data-driven technologies or you are looking for the greatest talent in artificial intelligence? If one of the answers is yes, become a partners.",
};

export default function Partners() {
  const benefits = [
    {
      title: "AI Talent Pool",
      text: "Get access to our network of highly motivated students with a specialization in artificial intelligence technologies. Many of our members are interested in internships and working student positions.",
      icon: Heart,
    },
    {
      title: "Marketing & Awareness",
      text: "As a partner, you will be featured on our website. Plus, we will advertise your company as a supporter of TUM.ai in our marketing campaigns. (8k+ followers on LinkedIn) Boost the perception of your brand among students across Munich and beyond.",
      icon: Megaphone,
    },
    {
      title: "Project Collaborations",
      text: "Being a partner opens the door for many sorts of collaboration, like becoming a challenge setter for our Makeathons, joining for an industry project or hosting networking workshops with our members. We are only limited by your creativity!",
      icon: Handshake,
    },
    {
      title: "Network & Ecosystem",
      text: "We invite you to benefit from our entrepreneurial ecosystem, our own AI startup founders, as well as insights from our own R&D projects. We invite you to leverage our connections to other top university AI clubs, as well as the association to the TUM brand to drive AI in your company.",
      icon: Users,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Enhanced Effects */}
        <Image
          src="/assets/partners.jpg"
          alt="Hero background image"
          fill
          className="absolute -z-10 scale-110 object-cover transition-transform duration-700 hover:scale-105"
          priority
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />

        {/* Content Container */}
        <div className="relative container mx-auto flex min-h-[80vh] max-w-4xl flex-col justify-center p-8 text-white md:p-16">
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-0 h-32 w-1 -translate-y-1/2 bg-linear-to-b from-blue-500 to-purple-500 opacity-50" />

          {/* Main Content */}
          <div className="space-y-6">
            <h1
              className={cx(
                "text-6xl font-medium tracking-tight md:text-7xl",
                "bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent",
                "animate-fade-in-up",
                bitter.className,
              )}
            >
              Become a partner
            </h1>
            <p className="animate-fade-in-up text-xl text-gray-300 [animation-delay:200ms]">
              Get access to Munich&apos;s largest student talent pool of AI
              enthusiasts
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-white p-8 sm:py-16 lg:py-32">
        <div className="container mx-auto">
          <h2 className={cx("mb-8 text-3xl font-semibold", bitter.className)}>
            Strategic Partners
          </h2>
          <Logos logos={strategic_partnerts} />
          <h2
            className={cx(
              "mt-32 mb-8 text-3xl font-semibold",
              bitter.className,
            )}
          >
            Enablers and Supporters
          </h2>
          <Logos logos={enablers_supporters} />
          <h2
            className={cx(
              "mt-32 mb-8 text-3xl font-semibold",
              bitter.className,
            )}
          >
            Project Partners
          </h2>
          <Logos logos={project_partners} />
        </div>
      </section>

      <section className="relative bg-linear-to-b from-blue-700 to-blue-800 p-8 text-white sm:py-16 lg:py-32">
        <div className="container mx-auto">
          <div className="mx-auto max-w-7xl">
            {/* Background dots pattern */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-8 opacity-10">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="h-1 w-1 rounded-full bg-purple-300" />
                ))}
              </div>
            </div>

            <div className="relative mb-16 flex flex-col items-center text-center">
              <h2
                className={cx(
                  "mb-6 text-3xl font-semibold text-white",
                  bitter.className,
                )}
              >
                Partner with TUM.ai
              </h2>
              <p className="max-w-2xl text-xl text-white/90">
                Access our exclusive talent pool of AI enthusiasts, experienced
                in software development, data science, and AI strategy.
              </p>
            </div>

            <div className="relative grid gap-16 md:grid-cols-2">
              <div className="relative">
                <div className="relative space-y-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                  {/* Glass-like top highlight */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-300/50 to-transparent"></div>
                  {/* Glass-like left highlight */}
                  <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-purple-300/50 to-transparent"></div>

                  <div className="space-y-6">
                    <h3
                      className={cx(
                        "text-2xl font-semibold text-white",
                        bitter.className,
                      )}
                    >
                      Ways to Collaborate
                    </h3>
                    <p className="text-white/80">
                      We&apos;re always open to new ideas and creative ways to
                      collaborate.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                        <h4 className="mb-2 font-medium text-white">
                          Events & Community
                        </h4>
                        <ul className="space-y-2 text-sm text-white/80">
                          <li className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-purple-300" />
                            <span>AI Summit Speaker</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-purple-300" />
                            <span>Makeathon Challenge</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-purple-300" />
                            <span>Workshop Host</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-purple-300" />
                            <span>Mentorship Program</span>
                          </li>
                        </ul>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                        <h4 className="mb-2 font-medium text-white">
                          Industry & Projects
                        </h4>
                        <ul className="space-y-2 text-sm text-white/80">
                          <li className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-purple-300" />
                            <span>Industry Project Partner</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-purple-300" />
                            <span>AI E-lab Judge</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-purple-300" />
                            <span>Post Open Positions</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3
                      className={cx(
                        "text-2xl font-semibold text-white",
                        bitter.className,
                      )}
                    >
                      Education & Knowledge
                    </h3>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-purple-300" />
                        <span>AI Academy Lecturer</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-purple-300" />
                        <span>Technical Workshop Leader</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-purple-300" />
                        <span>Research Collaboration</span>
                      </li>
                    </ul>
                  </div>

                  <Button
                    intent="glass"
                    className="w-full border border-white/10"
                  >
                    <Link href="mailto:partners@tum-ai.com">
                      Become a partner
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <Image
                    src={MartinTalk}
                    alt="Martin talk"
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 p-8">
                    <p className="text-lg text-white">
                      Join our network of industry leaders and innovators
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white p-8 sm:py-16 lg:py-32">
        <div className="container mx-auto">
          <h2
            className={cx(
              "text-uppercase mb-8 w-full text-3xl font-semibold",
              bitter.className,
            )}
          >
            What we offer
          </h2>
          <Benefits
            benefits={benefits}
            showShadow={true}
            columns={4}
            color="purple"
          />
        </div>
      </section>
    </>
  );
}
