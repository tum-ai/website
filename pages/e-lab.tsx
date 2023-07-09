import Logos from "@components/Logos";
import Stat from "@components/Stat";
import Button from "@components/ui/Button";
import Section from "@components/ui/Section";
import Image from "next/image";
import { partners } from "data/industry";
import { mentors } from "data/e-lab";
import tailwindConfig from "tailwind.config.js";
import resolveConfig from "tailwindcss/resolveConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faChevronDown,
  faCircleNodes,
  faHandsHoldingCircle,
  faHandshakeSimple,
} from "@fortawesome/free-solid-svg-icons";
import { cx } from "class-variance-authority";
import { bitter, interBold } from "@styles/fonts";
import Spline from "@splinetool/react-spline";
import Benefits from "@components/Benefit";
import Timeline from "@components/Timeline";

function Hero() {
  const fullConfig = resolveConfig(tailwindConfig);

  return (
    <section className="-z-10 h-screen">
      <div className="absolute top-0 -z-10 h-full w-full bg-black">
        <Spline scene="https://prod.spline.design/EAkcpdJTKDSGjRQS/scene.splinecode" />
      </div>

      <div className="flex h-full w-full items-center text-white">
        <div className="max-w-8xl mx-auto space-y-6 p-8 md:p-16">
          <h1 className="font-bold">
            <span className="text-8xl">AI</span>
            <br />
            <span className="text-3xl sm:text-5xl xl:text-8xl">
              Entrepreneurship Lab
            </span>
          </h1>

          <div className="flex flex-col items-center">
            <p className="mb-8 max-w-2xl text-center text-2xl font-bold">
              Join the AI E-Lab and unlock your potential to shape the future of
              technology
            </p>

            <Button className="border-none bg-gradient-to-b from-yellow-500 to-red-500">
              Apply now
            </Button>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-16 left-[50%] -translate-x-[50%]"
        onClick={() => window.scrollBy({ top: 500, behavior: "smooth" })}
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          size="2xl"
          className="animate-bounce text-white"
        />
      </button>
    </section>
  );
}

export default function AIELab() {
  return (
    <>
      <Hero />
      <Section className="bg-purple-950 text-white">
        <div className="md:w-3/5">
          <h2 className="mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-5xl font-semibold uppercase text-transparent">
            What is the AI E-Lab?
          </h2>
          <p>
            <span className="text-yellow-500">The AI Entrepreneurship Lab</span>{" "}
            is a 3-months founding journey for curious and driven individuals.
            We provide you with relevant knowhow and a team as well as support
            you in laying the foundation for your own AI startup.
          </p>
        </div>
        <div className="flex items-end justify-end">
          <div className="mt-12 w-full md:w-3/5">
            <h3 className="mb-4 text-center text-4xl font-semibold text-yellow-500">
              About last AI E-Lab
            </h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full rounded border-8 border-yellow-500"
            ></iframe>
          </div>
        </div>
      </Section>

      <Section className="bg-purple-950 text-white">
        <h2 className="mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-5xl font-semibold uppercase tracking-widest text-transparent">
          How founders experience the E-Lab
        </h2>
        <p className="flex flex-col justify-between gap-2 text-4xl font-semibold text-yellow-500 sm:flex-row">
          <span>you</span>
          <span>yes you</span>
          <span>can build sth great</span>
        </p>

        <div className="my-12 grid gap-8 md:grid-cols-2">
          <p>
            Entrepreneurship means change and we believe that everyone is
            qualified to become an{" "}
            <span className="text-red-500">entrepreneur</span>. Think about your
            last big achievement, your perseverance over hurdles and what it
            took to succeed - you already proved that you are a real
            changemaker.
          </p>

          <p>
            Are you ready for your next step? Great. With our AI
            Entrepreneurship Lab we aim at making the founding of AI{" "}
            <span className="text-red-500">startups</span>
            accessible to everyone, including you. You bring in the motivation
            and dedication, and we connect you and try to make founding as easy
            as possible for you.
          </p>
        </div>

        <SnapSlider cards={mentors} />
      </Section>

      <Section className="bg-purple-950 text-white">
        <h2 className="mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-center text-5xl font-semibold uppercase tracking-widest text-transparent">
          Last AI E-Lab in numbers
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-24">
          <Stat description={"Workshops"} value={"17+"} />
          <Stat description={"Startups"} value={"15"} />
          <Stat description={"Winners"} value={"3"} />
        </div>

        <div className="mt-12">
          <h3 className="mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-center text-4xl font-semibold tracking-widest text-transparent">
            Top 3 Startups have:
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-24">
            <Stat description={"B2B customers"} value={"8"} />
            <Stat description={"Funding"} value={"165K"} />
            <Stat description={"Revenue"} value={"26K"} />
            <Stat description={"Hired employees"} value={"15"} />
          </div>
        </div>
      </Section>

      <Section className="bg-purple-950 text-white">
        <h2 className="mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-center text-5xl font-semibold uppercase tracking-widest text-transparent">
          Benefits
        </h2>

        <p className="mb-12 text-center text-4xl">
          We <span className="text-yellow-500">support </span>you in achieving
          your endeavors because your{" "}
          <span className="text-yellow-500">personal growth</span> is our{" "}
          <span className="text-yellow-500">goal</span>
        </p>

        <p className="mb-12 text-center">
          We want to challenge curious and dedicated people with an interest in
          founding an AI-based startup. We accept already existing teams and
          individuals of any background and level of experience, since we value
          motivation and commitment most. This is a part-time program and we
          expect you to provide us with intermediate deliverables on a weekly
          basis: pitches, MVPs, learning outcomes, sprint planning, etc. Our
          events are planned to take place in Munich, so you must be able join
          in person. The more you commit, the more you get.
        </p>

        <Benefits
          benefits={[
            {
              icon: faCircleNodes,
              title: "Access to our network",
              text: "In order to shape something meaningful and have impact, knowledge alone does not suffice. You need a network of diverse people you can learn from and share your passion with. Wee therefore organize several events where you can meet & mingle with TUM.ai members, business and domain experts, startups, founders, investors & many more",
            },
            {
              icon: faHandshakeSimple,
              title: "Count on our support",
              text: "We help you develop your final MVP and guide you through the program with individual coaching and tailored mentoring with founders and domain experts. You and your team have the opportunity to experience vidid discussions in our co-working spaces. We also provide you with software and hardware resources, and you can count on tech support.",
            },
            {
              icon: faBook,
              title: "Learn and grow",
              text: "Everyone has superpowers and we support you in using them to excel. With hands-on workshops we provide you with the knowledge to found your AI startup and encourage you to test it in a real-world setting. Listening to and interacting with others are key to personal growth and success, which is why our program is customer-centric and feedback-oriented.",
            },
            {
              icon: faHandsHoldingCircle,
              title: "We are equity free",
              text: "Making AI and the founding process accessible to everyone is one of our missions at TUM.ai. We therefore do not charge any costs for the AI E-Lab and do not take any equity stake in your venture. Further, we don’t expect pre-seed readiness or any initial investment. The only investment you have to arrange is your time, eagerness and dedication.",
            },
          ]}
          color="yellow"
        />
      </Section>

      <Section className="bg-purple-950 text-white">
        <h2 className="mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-center text-5xl font-semibold uppercase tracking-widest text-transparent">
          Timeline
        </h2>
        <Timeline
          events={[
            {
              title: "Formation & Ideation",
              duration: "4 Weeks",
              date: "October 2023",
              text: "Founders come together to explore ideas, meet their co-founders and build startup teams trough the AI E-Lab onboarding, co-founder matching/ team building, and ideation activities. This phase will end in a relaxed informal event where founders announce their teams and ideas",
            },
            {
              title: "Idea validation",
              duration: "2 Weeks",
              date: "November 2023",
              text: "Startups will focus on validating & shaping their ideals form the previous phase trough market research & developing robust business models that will undergo evaluation in a Litmus Test (first pitch event) to a jury",
            },
            {
              title: "Build-measure learn",
              duration: "4 Weeks",
              date: "Nov - Dec 2023",
              text: "Startups will make it trough the Litmus Test with validated ideas will start to build prototypes, measure performance, gather valuable feedback from mentors, industry experts, and customers, and continuously integrate towards achieving product-market fit. This phase will end with a Stress test (second pitch event) where more experienced jury will rigorously test the product market fit & prototypes of these startups and determine who is fit to make it to the final pitch to pitch to investors in Phase 4",
            },
            {
              title: "Refinement & Final pitch",
              duration: "4 Weeks",
              date: "Dec - Jan 2024",
              text: "Startups that make it trough the Stress Test will continue in this phase to refine their prototypes into Minimum Viable Products (MVP) and further refine their business models, and pitch based on the valuable feedback received from customers, mentors, industry experts, and the jury during the Stress Test. The goal of every startup in this phase will be to prepare to showcase their polished startups to real investors and a public audience in the AI E-Lab final pitch event",
            },
          ]}
        />
      </Section>

      <Section className="bg-purple-950 text-white">
        <h2 className="mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-center text-5xl font-semibold uppercase tracking-widest text-transparent">
          Meet our sponsors
        </h2>

        <div className="mb-24">
          <h3 className="text-uppercase mb-12 w-full text-center text-2xl font-bold">
            1. Premium Sponsors
          </h3>
          <Logos logos={partners} />
        </div>

        <div className="mb-24">
          <h3 className="text-uppercase mb-12 w-full text-center text-2xl font-bold">
            2. Sponsors
          </h3>
          <Logos logos={partners} />
        </div>

        <div className="mb-24">
          <h3 className="text-uppercase mb-12 w-full text-center text-2xl font-bold">
            3. Workshops and more by
          </h3>
          <Logos logos={partners} />
        </div>
      </Section>

      <Section background="inverted">
        <div className="mx-auto max-w-4xl">
          <h2
            className={cx(
              "mb-8 text-center text-4xl font-semibold text-white",
              bitter.className
            )}
          >
            Apply now and join the{" "}
            <span className="text-purple-500">AI E-Lab</span>
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <p>
              Do you want to become part of a commmunity of AI enthusiasts and
              found your AI startup? We are excited to have you on board.
            </p>
            <div className="flex flex-col justify-center gap-4">
              <Button>Apply for the AI E-Lab</Button>
              <Button intent="secondary">Become a partner</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function SliderCard({ imgSrc, name, text }) {
  return (
    <div className="min-w-sm relative h-full w-full overflow-hidden rounded-lg grayscale saturate-200">
      <Image src={imgSrc} alt={name} fill objectFit="cover" />
      <div className="h-3/8 absolute bottom-0 w-full bg-black bg-opacity-80 p-2 text-white backdrop-blur">
        <h3 className="font-bold">{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function SnapSlider({ cards }) {
  return (
    <div className="scrollbar-hidden sm:scrollbar-purple flex snap-x space-x-8 overflow-x-auto pb-4">
      {cards.map((card) => (
        <div
          className="inline-flex min-h-[220px] min-w-[220px] snap-center align-middle"
          key={`${card.name}-${card.text}`}
        >
          <SliderCard {...card} />
        </div>
      ))}
    </div>
  );
}
