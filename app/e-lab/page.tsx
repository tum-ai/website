import Benefits from "@components/Benefit";
import FAQ from "@components/FAQ";
import Logos from "@components/Logos";
import Stat from "@components/Stat";
import Testimonials from "@components/Testimonials";
import Timeline from "@components/Timeline";
import Section from "@components/ui/Section";
import {
  faBook,
  faCircleNodes,
  faHandshakeSimple,
  faHandsHoldingCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faq, testimonials } from "data/e-lab";
import Link from "next/link";
import { Hero } from "./hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TUM.ai - AI Entrepreneurship Lab",
  description:
    "Join the AI Entrepreneurship Lab if you are up for a 3-month founding program designed to ignite your innovative spirit and equip you with the relevant know-how to build your own AI startup.",
  openGraph: {
    title:
      "TUM.ai's AI Entrepreneurship Lab: A Founding Journey in Artificial Intelligence",
    description:
      "A 3-months founding journey for curious and driven individuals. We provide relevant know-how, a team, and support to lay the foundation for AI startups.",
    images: [
      {
        url: "https://timonschramm.com/sm-preview.jpg", // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: "AI E-Lab Sphere",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <Section className="items-center justify-center bg-purple-950 text-white">
        <h2 className="mb-8 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-center text-3xl font-semibold uppercase tracking-widest text-transparent sm:text-5xl">
          AI E-Lab Final Pitch Event
        </h2>

        <div className="flex items-center justify-center ">
          <div className="flex max-w-xl flex-col gap-8">
            <p className="text-center">
              Come around to see new and exciting ideas in the world of AI at
              our AI E-Lab Final Pitch Event Friday, January 19th. An evening
              where our top startups showcase their exciting developments.
              It&apos;s a great chance to see fresh ideas in action and meet
              some of the key players in the industry.{" "}
            </p>
            <div className="flex flex-col justify-center gap-6 ">
              <Link
                className="min-w-[300px] rounded-full border-none bg-gradient-to-b from-yellow-500 to-red-500 p-4 text-center sm:min-w-[400px]"
                href="https://www.eventbrite.de/e/ai-e-lab-final-pitch-competition-tickets-784536669297?aff=oddtdtcreator"
              >
                Sign up now
              </Link>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-purple-950 text-white">
        <div className="mb-8 sm:mb-16 md:w-3/5 lg:mb-32">
          <h2 className="mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-5xl font-semibold uppercase text-transparent">
            What is the AI E-Lab?
          </h2>
          <p className="text-2xl">
            <span className="text-yellow-500">
              The AI Entrepreneurship Lab is the Launchpad for your AI ventures,
            </span>{" "}
            a 3-months founding journey for curious and driven individuals. We
            provide you with relevant know-how, a team, and support to lay the
            foundation for your own AI startup.
          </p>
        </div>

        <div className="flex items-end justify-end">
          <div className="flex w-full flex-col items-center md:w-3/5">
            <h3 className="mb-4 text-4xl font-semibold text-yellow-500">
              Inside the E-Lab: A Founder&apos;s Journey
            </h3>
            <iframe
              src="https://www.youtube.com/embed/DPJGAG9blO8?si=jDCtCvf6sVZRX69X"
              style={{ aspectRatio: 16 / 9 }}
              className="w-full"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </Section>

      <Section className="bg-purple-950 text-white">
        <h2 className="mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-3xl font-semibold uppercase tracking-widest text-transparent sm:text-5xl">
          How founders experience the E-Lab
        </h2>
        <p className="flex flex-col justify-start gap-2 text-3xl font-semibold text-yellow-500 sm:text-4xl">
          <span>you.</span>
          <span>yes you.</span>
          <span>you can build something great!</span>
        </p>

        <div className="my-12 grid gap-16 md:grid-cols-2">
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
            <span className="text-red-500">startups </span>
            accessible to everyone, including you. Bring your motivation and
            dedication, and we’ll provide the rest, striving to make founding as
            easy as possible for you.
          </p>
        </div>

        <div className="mt-16">
          <SnapSlider cards={testimonials} />
        </div>
      </Section>

      <Section className="bg-purple-950 text-white">
        <h2 className="mb-16 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-center text-3xl font-semibold uppercase tracking-widest text-transparent sm:text-5xl">
          Last AI E-Lab in numbers
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-24">
          <Stat description={"Workshops"} value={"17+"} />
          <Stat description={"Startups"} value={"16"} />
          <Stat description={"Winners"} value={"3"} />
        </div>

        <div className="mt-24">
          <h3 className="mb-16 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-center text-2xl font-medium uppercase tracking-widest text-transparent sm:text-4xl">
            Top 3 Startups have
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
        <h2 className="mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-center text-3xl font-semibold uppercase tracking-widest text-transparent sm:text-5xl">
          Benefits
        </h2>

        <p className="mb-8 text-center text-4xl">
          We <span className="text-yellow-500">support </span>you in achieving
          your endeavors because your{" "}
          <span className="text-yellow-500">personal growth</span> is our{" "}
          <span className="text-yellow-500">goal</span>
        </p>
        <div className="my-24 flex flex-col gap-8 lg:px-24 xl:px-44">
          <p className="px-8 text-center">
            Are you passionate about AI and ready to make a real-world impact?
            TUM.ai invites you to join our AI E-Lab, a platform where
            visionaries, doers, and risk-takers with an interest in founding an
            AI-based startup come together to shape the future of AI. We value
            diversity, curiosity, and a commitment to learning and improvement.
          </p>
          <p className="px-8 text-center">
            As part of the AI E-Lab, you&apos;ll connect with a vibrant
            ecosystem of startups, industry partners, and like-minded peers.
            You&apos;ll have the opportunity to contribute to groundbreaking AI
            projects and drive positive social impact.
          </p>
          <p className="px-8 text-center">
            This is a part-time program and we expect you to provide us with
            intermediate deliverables on a weekly basis: pitches, MVPs, learning
            outcomes, sprint planning, etc. Our events are planned to take place
            in Munich, so you must be able join in person. The more you commit,
            the more you get.
          </p>
        </div>
        <Benefits
          benefits={[
            {
              icon: faCircleNodes,
              title: "Access to our network",
              text: "In order to shape something meaningful and have impact, knowledge alone does not suffice. You need a network of diverse people you can learn from and share your passion with. We therefore organise several events where you can meet and mingle with TUM.ai members, business and domain experts, startups, founders, investors and many more. Of course, you're also welcome to reach out at any time in between our scheduled events.",
            },
            {
              icon: faHandshakeSimple,
              title: "Count on our support",
              text: "We help you develop your final MVP and guide you through the program with individual coaching and tailored mentoring with founders and domain experts. You and your team have the opportunity to experience vivid discussions in our co-working spaces. We also provide you with software and hardware resources, and you can count on tech support.",
            },
            {
              icon: faBook,
              title: "Learn and grow",
              text: "Everyone has superpowers and we support you in using them to excel. With hands-on workshops we provide you with the knowledge to found your AI startup and encourage you to test it in a real-world setting. You’ll hear stories of other founders and have the possibility to learn from their experiences. Our program is customer-centric and feedback-oriented, emphasising the importance of listening and interacting with others for personal growth and success.",
            },
            {
              icon: faHandsHoldingCircle,
              title: "We are equity free",
              text: "Making AI and the founding process accessible to everyone is one of our missions at TUM.ai. We, therefore, do not charge any costs for the AI E-Lab and do not take any equity stake in your venture. Further, we don’t expect pre-seed readiness or any initial investment. The only investment you have to arrange is your time, eagerness and dedication.",
            },
          ]}
          color="yellow"
        />
      </Section>

      <Section className="bg-purple-950 text-white">
        <h2 className="mb-12 ml-16 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-center text-3xl font-semibold uppercase tracking-widest text-transparent sm:text-5xl md:ml-0">
          Timeline
        </h2>
        <Timeline
          events={[
            {
              title: "Formation & Ideation",
              duration: "4 Weeks",
              date: "October 2023",
              text: "You will interact with potential co-founders, explore ideas, and form teams through the AI E-Lab onboarding, co-founder matching/team building, and ideation activities. This phase will end with a relaxed informal event where you and your team will share your ideas and concepts.",
            },
            {
              title: "Idea validation",
              duration: "2 Weeks",
              date: "November 2023",
              text: "You will focus on validating and shaping your startup idea from the previous phase through market research and developing robust business models that will undergo evaluation in the first pitch event, a Litmus Test to a jury.",
            },
            {
              title: "Build-measure learn",
              duration: "4 Weeks",
              date: "Nov - Dec 2023",
              text: "If your team can make it through the Litmus Test with validated ideas you will start to build prototypes, measure performance, gather valuable feedback from mentors, industry experts, and customers, and continuously iterate towards achieving product-market fit. This phase will end with a Stress test (second pitch event) where a more experienced jury will rigorously test the product market fit and prototypes of your startup and determine who is fit enough to make it to the final pitch to pitch to investors in Phase 4.",
            },
            {
              title: "Refinement & Final pitch",
              duration: "4 Weeks",
              date: "Dec - Jan 2024",
              text: "Should your team successfully pass the Stress Test, you will continue to refine your prototypes into Minimum Viable Products (MVPs) and further refine your business models, and pitches based on the valuable feedback received from customers, mentors, industry experts, and the jury during the Stress Test. The goal of your startup in this phase will be to prepare to showcase your polished startups to real investors and a public audience in the AI E-Lab final pitch event. ",
            },
          ]}
        />
      </Section>

      <Section className="bg-purple-950 text-white">
        <h2 className="mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-center text-3xl font-semibold uppercase tracking-widest text-transparent sm:text-5xl">
          Meet our Partners and Sponsors
        </h2>

        <div className="mb-24">
          {/*     <h3 className="text-uppercase mb-12 w-full text-center text-2xl font-bold">
            Partners
          </h3> */}
          <Logos
            logos={[
              {
                src: "/assets/e-lab/partners/ai_munich_w.png",
                alt: "AI+Munich",
                href: "https://www.must-munich.com/aimunich/",
              },
              {
                src: "/assets/e-lab/partners/ewor_w.png",
                alt: "Ewor",
                href: "https://ewor.io/",
                width: 120,
              },
              {
                src: "/assets/e-lab/partners/campus_founders_w.png",
                alt: "Campus Founders",
                href: "https://campusfounders.de/",
              },
              {
                src: "/assets/e-lab/partners/merantix.svg",
                alt: "Merantix",
                href: "https://www.merantix.com/",
                width: 200,
              },
              {
                src: "/assets/e-lab/partners/hubert_burda_media.png",
                alt: "Burda",
                href: "https://www.burda.com/",
                width: 300,
              },
            ]}
          />
        </div>
        <Logos
          logos={[
            {
              src: "/assets/e-lab/partners/uvc_w.svg",
              alt: "UVC Partners",
              href: "https://www.uvcpartners.com/",
              width: 140,
            },
            {
              href: "https://www.cherry.vc/",
              src: "/assets/e-lab/partners/cherry_w.png",
              alt: "Cherry VC",
              width: 140,
            },
            {
              href: "https://ananda.vc/",
              src: "/assets/e-lab/partners/anandavc.png",
              alt: "Ananda Impact Ventures",
              width: 200,
            },
          ]}
        />
      </Section>

      <Section className="bg-purple-950 text-center text-white">
        <Link
          className="rounded-full border-2 border-yellow-500 p-4 text-center text-center font-bold text-yellow-500"
          href="mailto:venture@tum-ai.com"
        >
          Become a partner
        </Link>
      </Section>

      <Section className="bg-purple-950 text-white">
        <h3 className="text-primary mb-2 block text-center text-lg font-semibold">
          FAQ
        </h3>
        <h4 className="text-dark mb-12 text-center text-3xl font-bold sm:text-4xl">
          Do you have any questions?
        </h4>
        <FAQ questions={faq} />
        <div className="flex flex-col items-center justify-center gap-6 ">
          <h3 className="mt-20 text-center text-2xl font-semibold">
            You still have other questions?
          </h3>
          <Link
            className="min-w-[300px] rounded-full border-2 border-yellow-500 p-4 text-center font-semibold transition-colors duration-300 hover:border-red-500 sm:min-w-[400px]"
            href="mailto:venture@tum-ai.com"
          >
            Ask us here
          </Link>
        </div>
      </Section>
    </>
  );
  function SnapSlider({ cards }) {
    return (
      <div className="scrollbar-hidden scrollbar-yellow flex snap-x space-x-8 overflow-x-auto pb-4">
        {cards.map((card) => (
          <div
            className="inline-flex min-h-[220px] min-w-[300px] snap-center align-middle sm:min-w-[400px]"
            key={`${card.name}-${card.text}`}
          >
            <Testimonials {...card} />
          </div>
        ))}
      </div>
    );
  }

  /* {
      /* This code is needed for the Mentors and Advisors, which will be added later on

    function SliderCard({imgSrc, name, text}) {
      return (
          <div className="min-w-sm relative h-full w-full overflow-hidden rounded-lg grayscale saturate-200">
            <Image src={imgSrc} alt={name} fill objectFit="cover"/>
            <div className="h-3/8 absolute bottom-0 w-full bg-black bg-opacity-80 p-2 text-white backdrop-blur">
              <h3 className="font-bold">{name}</h3>
              <p>{text}</p>
            </div>
          </div>
      );
    }


    } */
}
