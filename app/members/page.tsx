import { bitter } from "@styles/fonts";
import { cx } from "class-variance-authority";
import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowRight,
  Rocket,
  Building2,
  GraduationCap,
  Code,
  Scale,
  Users,
  Megaphone,
  Handshake,
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "TUM.ai - Members",
};

interface Step {
  step: string;
  name: string;
  gradient: string;
  description: string;
}

const steps: Step[] = [
  {
    step: "00",
    name: "Batch Introduction",
    gradient: "bg-linear-to-br from-slate-50 via-slate-100 to-slate-200",
    description:
      "Kick off your journey with the Batch Introduction! During the onboarding weekend, you'll get introduced to TUM.ai, meet current and new members, and take part in social events - setting the foundation for your journey. The experience continues with a getaway trip designed to deepen connections with both previous and new members in an unforgettable setting.",
  },
  {
    step: "01A",
    name: "Research Track",
    gradient: "bg-linear-to-br from-slate-50 via-slate-100 to-slate-200",
    description:
      "Join a dedicated team working on an Impact Project aligned with your skills and interests, applying AI to address real-world challenges in a collaborative environment. These projects are designed to contribute to the broader research and technology community through tangible outcomes such as academic publications or open-source contributions. Along the way, you'll have the opportunity to engage deeply with our vibrant community, develop new skills, and take part in learning opportunities, trips, and special events—all while experiencing the hands-on, team-oriented culture that defines TUM.ai.",
  },
  {
    step: "01B",
    name: "Initiative Track",
    gradient: "bg-linear-to-br from-slate-50 via-slate-100 to-slate-200",
    description:
      "Join one of our core departments and become a driving force behind everything that makes TUM.ai stand out. In this track, you'll dive into exciting projects, collaborate with motivated peers, and help shape the future of our community. Whether it's launching new ideas, strengthening our network, or making the day-to-day magic happen - you'll be at the heart of it all, growing your skills while making TUM.ai better for everyone. Alongside your work, you'll have the chance to engage deeply with our vibrant network, develop new skills, and take part in learning opportunities, trips, and special events.",
  },
  {
    step: "02",
    name: "Growth Opportunities",
    gradient: "bg-linear-to-br from-slate-50 via-slate-100 to-slate-200",
    description:
      "After your first semester, your journey at TUM.ai doesn't end with your initial project. You'll have the opportunity to further shape the initiative by founding a strategic task force, joining a department or task force that's new to you or continuing in your current department, potentially taking on a Team Lead role.",
  },
  {
    step: "03",
    name: "Research Exchange (REX) Program",
    gradient: "bg-linear-to-br from-slate-50 via-slate-100 to-slate-200",
    description:
      "After completing one semester, you become eligible for the REX Program-your gateway to conducting research at world-renowned institutions like MIT, Harvard, or Camebridge. Through our strong alumni network, we'll help you find the right research topic, navigate the application process, and support you every step of the way. It's a unique chance to take your AI journey global and contribute to cutting-edge research on an international stage.",
  },
  {
    step: "04",
    name: "Alumni Program",
    gradient: "bg-linear-to-br from-slate-50 via-slate-100 to-slate-200",
    description:
      "Having been with TUM.ai for two or more semesters, you can join the Alumni Program, opening up opportunities for continued networking and collaboration.",
  },
];

interface Department {
  name: string;
  icon: React.ElementType;
  description: string;
  gradient: string;
}

interface PreviousWork {
  title: string;
  description: string;
  link: string;
  date: string;
  category: "Research" | "Project";
}

const previousWork: PreviousWork[] = [
  {
    title: "IBM SS24 Research",
    description:
      "We address a fundamental limitation in language models: their struggle with numerical reasoning. While these models excel at text generation, they lack natural inductive bias for handling numbers, especially in scientific contexts. Our solution introduces two novel loss functions that improve numerical accuracy by incorporating regression-like objectives into the training process. When applied to a standard T5 model, we demonstrate significant improvements in numerical accuracy across mathematical tasks.",
    link: "https://arxiv.org/abs/2411.02083",
    date: "Summer 2024",
    category: "Research",
  },
  {
    title: "MIT SS24 Research",
    description:
      "We bridge the gap between computational predictions and laboratory synthesis in materials science. While machine learning has improved the prediction of stable material structures, translating these predictions into successful laboratory syntheses remains challenging. Our work introduces the first Reaction Graph Network (RGN) to model precursor interactions and predict synthesis conditions for inorganic reactions, significantly accelerating the path from computational predictions to material synthesis.",
    link: "https://openreview.net/pdf?id=VGsXQOTs1E",
    date: "Summer 2024",
    category: "Research",
  },
  {
    title: "MIT WS24/25 Research",
    description:
      "We present Retro-Rank-In, a novel framework for inorganic material retrosynthesis that overcomes limitations in traditional machine learning approaches. Unlike previous methods that rely on known precursors, our approach embeds target and precursor materials in a shared latent space and learns a pairwise ranker on a bipartite graph. This enables unprecedented generalization capabilities, as demonstrated by correctly predicting precursor pairs never seen in training, setting new state-of-the-art results in material synthesis planning.",
    link: "https://arxiv.org/abs/2502.04289",
    date: "Winter 2024",
    category: "Research",
  },
];

const departments: Department[] = [
  {
    name: "Makeathon",
    icon: Rocket,
    description:
      "Organizing Munich's largest AI Makeathon - a 48-hour virtual challenge where teams develop real-world business cases with AI. Features workshops, talks, and expert mentorship.",
    gradient: "bg-linear-to-br from-slate-50 via-slate-100 to-slate-200",
  },
  {
    name: "Venture",
    icon: Building2,
    description:
      "Bridging the gap between ideas and successful AI startups. We foster innovation and entrepreneurial spirit within TUM.ai.",
    gradient: "bg-linear-to-br from-slate-50 via-slate-100 to-slate-200",
  },
  {
    name: "Industry",
    icon: GraduationCap,
    description:
      "Connecting TUM.ai members with industry partners for real-world AI projects during lecture-free periods.",
    gradient: "bg-linear-to-br from-slate-50 via-slate-100 to-slate-200",
  },
  {
    name: "Education",
    icon: GraduationCap,
    description:
      "Creating and delivering AI educational content and events for all skill levels - from beginner to expert.",
    gradient: "bg-linear-to-br from-slate-50 via-slate-100 to-slate-200",
  },
  {
    name: "Software Dev",
    icon: Code,
    description:
      "Building and maintaining TUM.ai's digital infrastructure, from in-house tools to cloud services.",
    gradient: "bg-linear-to-br from-slate-50 via-slate-100 to-slate-200",
  },
  {
    name: "Legal & Finance",
    icon: Scale,
    description:
      "Ensuring TUM.ai's compliance and financial sustainability while maintaining our non-profit status.",
    gradient: "bg-linear-to-br from-slate-50 via-slate-100 to-slate-200",
  },
  {
    name: "Community",
    icon: Users,
    description:
      "Building and nurturing our community through events, buddy programs, and recruitment.",
    gradient: "bg-linear-to-br from-slate-50 via-slate-100 to-slate-200",
  },
  {
    name: "Marketing",
    icon: Megaphone,
    description:
      "Shaping TUM.ai's public image and promoting our vision through strategic communication.",
    gradient: "bg-linear-to-br from-slate-50 via-slate-100 to-slate-200",
  },
  {
    name: "Partners & Sponsors",
    icon: Handshake,
    description:
      "Building strategic partnerships and securing sponsorships to enable ambitious events and projects.",
    gradient: "bg-linear-to-br from-slate-50 via-slate-100 to-slate-200",
  },
];

const Arrow = ({ color = "slate-400" }: { color?: string }) => (
  <div className="my-8 flex items-center justify-center">
    <ArrowDown className={`text-${color} text-lg opacity-40`} />
  </div>
);

const DepartmentCard = ({ department }: { department: Department }) => {
  const Icon = department.icon;
  return (
    <div className="group relative h-full rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
      {/* Glass-like top highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-300/50 to-transparent"></div>
      {/* Glass-like left highlight */}
      <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-purple-300/50 to-transparent"></div>

      <div className="relative mb-5 flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors group-hover:bg-white/15">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold tracking-tight text-white">
          {department.name}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-slate-300">
        {department.description}
      </p>
    </div>
  );
};

const WorkCard = ({ work }: { work: PreviousWork }) => (
  <a
    href={work.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block h-full"
  >
    <div className="group relative h-full rounded-xl border border-slate-200 bg-white/90 p-8 backdrop-blur-sm transition-all duration-300 hover:border-purple-100 hover:shadow-lg">
      {/* Glass-like top highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-white/80 via-purple-100/50 to-white/80"></div>
      {/* Glass-like left highlight */}
      <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/80 via-purple-100/50 to-white/80"></div>

      <div className="relative mb-4 flex items-center justify-between">
        <span className="text-xs font-medium tracking-wide text-slate-500">
          {work.date}
        </span>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 transition-colors group-hover:bg-purple-50 group-hover:text-purple-600">
          {work.category}
        </span>
      </div>
      <h3 className="mb-3 line-clamp-2 text-lg font-semibold text-slate-900">
        {work.title}
      </h3>
      <p className="line-clamp-4 text-sm leading-relaxed text-slate-600">
        {work.description}
      </p>
      <div className="mt-4 flex items-center gap-1 text-xs text-blue-600 transition-colors group-hover:text-purple-600">
        Read more
        <ArrowRight className="h-3 w-3" />
      </div>
    </div>
  </a>
);

export default function Members() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Enhanced Effects */}
        <Image
          src="/assets/tu_cropped.jpg"
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
              Innovative & Passionate
            </h1>
            <p className="animate-fade-in-up text-xl text-gray-300 [animation-delay:200ms]">
              Who is behind the success of our initiative?
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative">
        {/* Journey Section - Light background with subtle pattern */}
        <div className="relative bg-linear-to-b from-white to-slate-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-8 opacity-5">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="h-1 w-1 rounded-full bg-blue-300" />
              ))}
            </div>
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="mb-24 text-center">
              <h2
                className={cx(
                  "mb-6 text-3xl font-semibold tracking-tight text-slate-900",
                  bitter.className,
                )}
              >
                The TUM.ai Member Journey
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                All of our active members embark on an exciting journey -
                working on projects, driving AI innovation, and helping shape
                the TUM.ai community. At the heart of it all is our community,
                which empowers every member to grow, take initiative, and turn
                bold ideas into reality. No matter your ambition, TUM.ai is here
                to help you pursue it and make a meaningful impact - together.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {/* First Card */}
              <div className="relative w-full">
                <div className="relative flex min-h-[240px] w-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-12 py-10 text-center text-slate-900 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-purple-100 hover:shadow-md">
                  {/* Glass-like top highlight */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-white/80 via-purple-100/50 to-white/80"></div>
                  {/* Glass-like left highlight */}
                  <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/80 via-purple-100/50 to-white/80"></div>

                  <div className="absolute top-8 left-8 text-xs font-medium tracking-wide text-slate-500">
                    {steps[0].step}
                  </div>
                  <h3 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">
                    {steps[0].name}
                  </h3>
                  <p className="max-w-[85%] text-sm leading-relaxed text-slate-600">
                    {steps[0].description}
                  </p>
                </div>
              </div>

              <Arrow color="slate-400" />

              <div className="flex flex-col justify-center gap-8 lg:flex-row lg:gap-16">
                {steps.slice(1, 3).map((step) => (
                  <div key={step.name} className="relative w-full lg:flex-1">
                    <div className="relative flex min-h-[240px] w-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-12 py-10 text-center text-slate-900 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-purple-100 hover:shadow-md">
                      {/* Glass-like top highlight */}
                      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-white/80 via-purple-100/50 to-white/80"></div>
                      {/* Glass-like left highlight */}
                      <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/80 via-purple-100/50 to-white/80"></div>

                      <div className="absolute top-8 left-8 text-xs font-medium tracking-wide text-slate-500">
                        {step.step}
                      </div>
                      <h3 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">
                        {step.name}
                      </h3>
                      <p className="max-w-[85%] text-sm leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Double Arrows */}
              <div className="flex flex-col justify-center gap-8 lg:flex-row lg:gap-16">
                <div className="flex justify-center lg:flex-1">
                  <Arrow color="slate-400" />
                </div>
                <div className="hidden justify-center lg:flex lg:flex-1">
                  <Arrow color="slate-400" />
                </div>
              </div>

              {/* Growth Opportunities Card */}
              <div className="relative w-full">
                <div className="relative flex min-h-[240px] w-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-12 py-10 text-center text-slate-900 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-purple-100 hover:shadow-md">
                  {/* Glass-like top highlight */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-white/80 via-purple-100/50 to-white/80"></div>
                  {/* Glass-like left highlight */}
                  <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/80 via-purple-100/50 to-white/80"></div>

                  <div className="absolute top-8 left-8 text-xs font-medium tracking-wide text-slate-500">
                    {steps[3].step}
                  </div>
                  <h3 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">
                    {steps[3].name}
                  </h3>
                  <p className="max-w-[85%] text-sm leading-relaxed text-slate-600">
                    {steps[3].description}
                  </p>
                </div>
              </div>

              <Arrow color="slate-400" />

              {/* REX Program Card */}
              <div className="relative w-full">
                <div className="relative flex min-h-[240px] w-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-12 py-10 text-center text-slate-900 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-purple-100 hover:shadow-md">
                  {/* Glass-like top highlight */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-white/80 via-purple-100/50 to-white/80"></div>
                  {/* Glass-like left highlight */}
                  <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/80 via-purple-100/50 to-white/80"></div>

                  <div className="absolute top-8 left-8 text-xs font-medium tracking-wide text-slate-500">
                    {steps[4].step}
                  </div>
                  <h3 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">
                    {steps[4].name}
                  </h3>
                  <p className="max-w-[85%] text-sm leading-relaxed text-slate-600">
                    {steps[4].description}
                  </p>
                </div>
              </div>

              <Arrow color="slate-400" />

              {/* Alumni Program Card */}
              <div className="relative w-full">
                <div className="relative flex min-h-[240px] w-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-12 py-10 text-center text-slate-900 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-purple-100 hover:shadow-md">
                  {/* Glass-like top highlight */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-white/80 via-purple-100/50 to-white/80"></div>
                  {/* Glass-like left highlight */}
                  <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/80 via-purple-100/50 to-white/80"></div>

                  <div className="absolute top-8 left-8 text-xs font-medium tracking-wide text-slate-500">
                    {steps[5].step}
                  </div>
                  <h3 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">
                    {steps[5].name}
                  </h3>
                  <p className="max-w-[85%] text-sm leading-relaxed text-slate-600">
                    {steps[5].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Departments Section - Dark gradient background */}
        <div className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 overflow-hidden">
            <div className="bg-grid-slate-100 absolute inset-0 opacity-5 [mask-image:linear-gradient(0deg,white,transparent)]" />
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/10" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="mb-20 text-center">
              <div className="mb-4 inline-flex items-center gap-2">
                <h2
                  className={cx(
                    "text-3xl font-semibold tracking-tight text-white",
                    bitter.className,
                  )}
                >
                  Our Core Departments
                </h2>
              </div>
              <p className="mx-auto max-w-2xl text-lg text-slate-300">
                Discover the diverse teams that make TUM.ai thrive. Each
                department plays a crucial role in our mission to shape the
                future of AI.
              </p>
            </div>
            <div className="grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {departments.map((dept) => (
                <DepartmentCard key={dept.name} department={dept} />
              ))}
            </div>
          </div>
        </div>

        {/* Previous Work Section - Light background with modern pattern */}
        <div className="relative bg-linear-to-b from-slate-50 to-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="bg-grid-slate-100 absolute inset-0 opacity-10 [mask-image:linear-gradient(0deg,transparent,white)]" />
            <div className="absolute inset-0 bg-linear-to-br from-blue-100/30 via-transparent to-purple-100/30" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="mb-20 text-center">
              <h2
                className={cx(
                  "mb-6 text-3xl font-semibold tracking-tight text-slate-900",
                  bitter.className,
                )}
              >
                Our Impact Projects
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Explore our latest research papers and projects that showcase
                the innovative work of our members.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {previousWork.map((work) => (
                <WorkCard key={work.title} work={work} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
