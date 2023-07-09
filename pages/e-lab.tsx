import Logos from "@components/Logos";
import Stat from "@components/Stat";
import Button from "@components/ui/Button";
import Section from "@components/ui/Section";
import Image from "next/image";
import { partners } from "data/industry";
import { mentors } from "data/e-lab";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import tailwindConfig from "tailwind.config.js";
import resolveConfig from "tailwindcss/resolveConfig";
import * as THREE from "three";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import VerticalCards from "@components/VerticalCards";
import { cx } from "class-variance-authority";
import { bitter, interBold } from "@styles/fonts";
import Timeline from "@components/Timeline";
import Spline from "@splinetool/react-spline";

function Hero() {
  const fullConfig = resolveConfig(tailwindConfig);

  return (
    <section className="-z-10 h-screen">
      <div className="absolute top-0 -z-10 h-full w-full bg-black">
        <Spline scene="https://prod.spline.design/jpWlmEoqcopISjbe/scene.splinecode" />
      </div>

      <div className="flex h-full w-full items-center text-white">
        <div className="mx-auto max-w-3xl space-y-6 p-8 md:p-16">
          <span>
            <h1 className="text-9xl font-bold">AI</h1>
            <h2 className="text-4xl font-bold sm:text-6xl">
              Entrepreneurship Lab
            </h2>
          </span>

          <p className="max-w-lg text-2xl font-bold">
            Join the AI E-Lab and unlock your potential to shape the future of
            technology
          </p>

          <Button>Apply</Button>
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
      <Section className="relative overflow-hidden bg-black ">
        text-stroke text-4xl font-bold text-transparent
        <h2 className="text-center text-4xl font-bold text-white">
          Last E-Lab
        </h2>
        <div className="sm-gap-4 mx-auto my-8 grid max-w-2xl justify-items-center sm:grid-cols-3">
          <Stat description={"Workshops"} value={"17+"} />
          <Stat description={"Startups"} value={"15"} />
          <Stat description={"Winners"} value={"3"} />
        </div>
        <hr className="border-blue-700" />
        <h2 className="mt-20 text-center text-2xl font-bold text-white">
          Top 3 Startups have
        </h2>
        <div className="mx-auto mt-8 grid max-w-md grid-cols-1 justify-items-center sm:grid-cols-2 sm:gap-y-6 md:max-w-4xl md:grid-cols-4">
          <Stat description={"B2B customers"} value={"8"} />
          <Stat description={"funding"} value={"165K"} />
          <Stat description={"revenue"} value={"25K"} />
          <Stat description={"hired employees"} value={"9"} />
        </div>
      </Section>
      <Section className="relative overflow-hidden bg-black">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-white">
            Our mentor network
          </h2>
          <SnapSlider cards={mentors} />
        </div>
      </Section>
      <Section className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 ">
          <div>
            <h2
              className={cx(
                "mb-8 w-full text-4xl font-semibold",
                bitter.className
              )}
            >
              You,
              <br />
              Yes you.
              <br />
              <span className="text-purple-500">You can build</span> something
              great.
            </h2>

            <p className="mb-4 text-xl font-bold">
              Entrepreneurship means change and we believe that everyone is
              qualified to become an entrepreneur.
            </p>
            <p>
              Think about your last big achievement, your perseverance over
              hurdles and what it took to succeed - you already proved that you
              are a real changemaker. Are you ready for your next step? Great.
              With our AI Entrepreneurship Lab we aim at making the founding of
              AI startups accessible to everyone, including you. You bring in
              the motivation and dedication, and we connect you and try to make
              founding as easy as possible for you.
            </p>
          </div>

          <div>
            <h2
              className={cx(
                "mb-8 w-full text-4xl font-semibold",
                bitter.className
              )}
            >
              How founders experience the{" "}
              <span className="text-purple-500">AI E-Lab</span>.
            </h2>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
        </div>
      </Section>
      <Section className="z-0 mx-auto max-w-7xl p-0">
        <Timeline />
      </Section>

      <Section className="mx-auto max-w-7xl">
        <VerticalCards
          cards={[
            {
              title: "Access our Network",
              text: "In order to shape something meaningful and have impact, knowledge alone does not suffice. You need a network of diverse people you can learn from and share your passion with. We therefore organize several events where you can meet and mingle with TUM.ai members, business and domain experts, startups, founders, investors and many more.",
            },
            {
              title: "Learn and Grow",
              text: "Everyone has superpowers and we support you in using them to excel. With hands-on workshops we provide you with the knowledge to found your AI startup and encourage you to test it in a real-world setting. Listening to and interacting with others are key to personal growth and success, which is why our program is customer-centric and feedback-oriented.",
            },
            {
              title: "Count on our Support",
              text: "We help you develop your final MVP and guide you through the program with individual coaching and tailored mentoring with founders and domain experts. You and your team have the opportunity to experience vidid discussions in our co-working spaces. We also provide you with software and hardware resources, and you can count on tech support.",
            },
            {
              title: "We are Equity-free",
              text: "Making AI and the founding process accessible to everyone is one of our missions at TUM.ai. We therefore do not charge any costs for the AI E-Lab and do not take any equity stake in your venture. Further, we don't expect pre-seed readiness or any initial investment. The only investment you have to arrange is your time, eagerness and dedication.",
            },
          ]}
        />
      </Section>

      <Section className="mx-auto max-w-7xl">
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
