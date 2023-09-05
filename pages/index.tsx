import Logos from "@components/Logos";
import Button from "@components/ui/Button";
import Section from "@components/ui/Section";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { bitter } from "@styles/fonts";
import { cx } from "class-variance-authority";
import VerticalCards, {
  type Props as VerticalCardsProps,
} from "components/VerticalCards";
import {
  initiatives_collabrated_with,
  partners_collabrated_with,
} from "data/partners";
import Image from "next/image";
import Link from "next/link";
import tailwindConfig from "tailwind.config.js";
import resolveConfig from "tailwindcss/resolveConfig";
import * as THREE from "three";
import MartinTalk from "../public/assets/partners/martin_talk.jpg";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>
          TUM.ai - Student Initiative focused on Artificial Intelligence
        </title>
        <meta
          name="description"
          content='TUM.ai is a student initiative based at the Technical University of Munich. We connect students and all relevant stakeholders to facilitate the application of AI across domains to drive positive societal impact through interdisciplinary projects. Together with our highly talented members, we run projects with industry partners, workshops and so called "Makeathon" product development competitions all around the topic of Artificial Intelligence and Data Analytics. '
        />
      </Head>
      <Hero />
      <Content1 />
      <Content2 />
      <div className="relative h-[450px] w-full bg-blend-overlay">
        <div className="absolute z-10 h-full w-full bg-purple-500 opacity-20"></div>
        <Image
          src={"/assets/aibootcamp.jpg"}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <Content3 />

      <Section>
        <h2
          className={cx(
            "text-uppercase mb-8 w-full text-4xl font-semibold",
            bitter.className
          )}
        >
          Partners <span className="text-purple-500">we have collaborated</span>{" "}
          with
        </h2>
        <Logos logos={partners_collabrated_with} />
      </Section>

      <Section>
        <h2
          className={cx(
            "text-uppercase mb-8 w-full text-4xl font-semibold",
            bitter.className
          )}
        >
          Partners Initiatives
        </h2>
        <Logos logos={initiatives_collabrated_with} />
      </Section>

      <Slack />
    </>
  );
}

function Hero() {
  const fullConfig = resolveConfig(tailwindConfig);

  return (
    <section className="relative h-screen">
      <div className="absolute top-0 -z-10 h-full w-full bg-blue-800">
        <Canvas camera={{ position: [2, 0, 0] }}>
          <ambientLight intensity={0.05} />
          <directionalLight intensity={1} position={[1.4, 2, 0]} />

          <mesh>
            <icosahedronGeometry args={[1, 10]} />
            <MeshDistortMaterial
              distort={0.3}
              wireframe={true}
              wireframeLinewidth={5}
              color={fullConfig.theme.colors.purple["600"]}
              transparent
              opacity={0.4}
              blending={THREE.AdditiveBlending}
            />
          </mesh>

          <Sphere args={[0.9]}>
            <MeshDistortMaterial
              distort={0.3}
              blending={THREE.MultiplyBlending}
            />
          </Sphere>
        </Canvas>
      </div>

      <div className="flex h-full w-full items-center text-white">
        <div className="m-auto space-y-8 lg:inline-block">
          <Image
            src={"/assets/logo_new_white_standard.png"}
            alt="Logo"
            width={450}
            height={100}
          />
          <div className="m-auto flex w-fit flex-col items-center justify-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
            <Button asChild>
              <Link href="mailto:partners@tum-ai.com">Become a partner</Link>
            </Button>
            <Button asChild>
              <Link href="https://join-us.tum-ai.com/">Become a Member</Link>
            </Button>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-16 left-[50%] -translate-x-[50%]"
        onClick={() => window.scrollBy(0, 500)}
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

function Content1() {
  const cards: VerticalCardsProps["cards"] = [
    {
      img: "/assets/home_img1.jpg",
      title: "AI Academy and educational offers",
      text: "a series of advanced AI workshops, featuring hands-on coding tutorials, provided by exciting tech companies, open for everyone!",
      subtext:
        "sponsored online course certificates and company visits are exclusive to TUM.ai members",
      buttons: [
        {
          href: "https://www.eventbrite.de/o/tumai-31793295023",
          text: "Apply now",
        },
        {
          href: "https://education.tum-ai.com/",
          text: "Learn more",
          intent: "tertiary",
        },
      ],
    },
    {
      img: "/assets/home_img2.png",
      title: "Makeathon Competitions",
      text: "AI product development Hackathon, 48 hours to solve challenges by our sponsors, open for tech and business students, online/in-person hybrid",
      subtext: "applications closed, finished",
      buttons: [
        {
          href: "https://makeathon.tum-ai.com/",
          text: "Learn more",
          intent: "tertiary",
        },
      ],
    },
    {
      img: "/assets/home_img3.png",
      title: "Industry Project Cooperations",
      text: "Teams of 4x paid working students, deployed to implement data-driven solutions and consult partner companies, over 12 weeks time-frame",
      subtext: "applications closed, currently ongoing",
      buttons: [
        {
          href: "https://www.notion.so/tum-ai/TUM-ai-Industry-Phase-5-0-AI-Projects-7b6e211a9a52421283e4e9833b0f7ea1",
          text: "Learn more",
          intent: "tertiary",
        },
      ],
    },
    {
      img: "/assets/home_img4.jpg",
      title: "AI E-Lab Entrepreneurship",
      text: `Startup incubation program for anyone interested in founding AI ventures, access TUM.ai's network to boost your vision`,
      subtext: "applications open, starting in October",
      buttons: [
        { href: "/e-lab", text: "Apply now" },
        {
          href: "/e-lab",
          text: "Learn more",
          intent: "tertiary",
        },
      ],
    },
  ];

  return (
    <Section className="bg-gray-100">
      <VerticalCards cards={cards} />
    </Section>
  );
}

function Content2() {
  return (
    <Section>
      <h2 className={cx("mb-8 text-4xl font-semibold", bitter.className)}>
        With over 170 active members, TUM.ai is{" "}
        <span className="text-purple-500">
          Germany&apos;s leading AI student initiative
        </span>
      </h2>

      <div className="grid gap-16 lg:grid-cols-2">
        <div className="relative h-[450px] w-full rounded">
          <Image
            src={"/assets/aibootcamp.jpg"}
            alt=""
            fill
            className="rounded object-cover"
          />
        </div>

        <div className="mb-4 space-y-4">
          <p className="text-xl font-bold">
            Get access to our{" "}
            <span className="text-purple-500">
              exclusive pre-selected talent pool
            </span>{" "}
            of highly qualified Software/Data Engineers and AI Strategists.
          </p>

          <div className="space-y-4">
            <p>
              Since founded in 2020,{" "}
              <span className="font-bold text-purple-500">
                TUM.ai&apos;s Vision
              </span>{" "}
              is to connect students and all relevant stakeholders to facilitate
              the application of AI across domains and drive positive societal
              impact through inter-disciplinary projects.
            </p>
            <p>
              Together with our highly-talented members, we run data science
              projects with industry, startup & VC partners, organize workshops
              and our &quot;Makeathon&quot; AI-product development competitions.
              We thrive to deploy AI solutions into new fields and industries!
              Do not hesitate to reach out to us, we are looking forward to
              ambitious collaborations.{" "}
            </p>
            <p>
              Under the Motto &quot;
              <span className="font-bold text-purple-500">
                Connect-Execute-Learn
              </span>
              &quot; we aim at lowering the entry-bar to AI-creation and -usage
              for people of every domain by establishing a platform to make
              practical experience through a diverse set of applied AI projects.
              We therefore educate and connect students from diverse backgrounds
              to incentivize new interdisciplinary AI projects and push the
              creation and usage of applicable and safe AI in all domains.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center space-y-2 rounded p-8 text-center">
        <h3 className="text-3xl font-semibold">
          Interested in joining TUM.ai?
        </h3>
        <p>
          Visit our Transparency Page to learn more! (application phase ended
          for this semester)
        </p>

        <div className="m-auto flex flex-col items-center space-x-0 space-y-2 pt-4 lg:flex-row lg:space-x-2 lg:space-y-0">
          <Button asChild>
            <Link href="/members">Meet our Members</Link>
          </Button>
          <Button asChild intent="tertiary">
            <Link href="https://join-us.tum-ai.com/">Learn more!</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

function Content3() {
  return (
    <Section background="inverted">
      <h2
        className={cx(
          "text-uppercase mb-8 w-full text-4xl font-semibold text-white",
          bitter.className
        )}
      >
        We connect <span className="text-[#a450e6]">stellar</span> Students and
        Companies
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="mb-4 space-y-4">
          <p className="text-xl font-bold">
            Get access to our{" "}
            <span className="text-[#a450e6]">
              exclusive pre-selected talent pool
            </span>{" "}
            of highly qualified Software/Data Engineers and AI Strategists.
          </p>

          <p>
            Join TUM.ai as a sponsor or cooperation partner of our non-profit
            student initiative. We are excited about engaging with your company
            via workshops, speaker events or as a challenge setter for our
            Makeathon competitions. If you are looking for a high-quality, but
            affordable team of Data Scientists and AI Strategists to solve
            problems for your firm, consider becoming a cooperation partner for
            TUM.ai&apos;s industry project format. (Student Data Consultancy)
          </p>

          <div className="flex w-fit flex-col items-start space-y-4 pt-8 lg:flex-row lg:items-center lg:space-x-2 lg:space-y-0">
            <Button asChild>
              <Link href="https://join-us.tum-ai.com/">Apply as a partner</Link>
            </Button>
            <Button asChild intent="tertiary">
              <Link href="/partners">Partner&apos;s of TUM.ai</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[300px] w-full">
          <Image
            src={MartinTalk}
            alt="Martin talk"
            fill
            className="rounded object-cover"
          />
        </div>
      </div>
    </Section>
  );
}

function Slack() {
  return (
    <Section>
      <div className="flex flex-col">
        <h2
          className={cx(
            "text-uppercase mb-8 w-full text-4xl font-semibold",
            bitter.className
          )}
        >
          Wanna stay up to date? Join our{" "}
          <span className=" text-purple-500">public Slack!</span>
        </h2>

        <p>
          Be among the first to be informed about upcoming events, job
          opportunities and workshops.
        </p>
        <Link className="text-purple-500" href={"/data-privacy"}>
          Terms & Conditions
        </Link>
        <div className="mt-6 flex space-x-4">
          <Button>
            <FontAwesomeIcon icon={faSlack} size="xl" className="mr-4" />
            <Link href="https://join.slack.com/t/tumaipublic/shared_invite/zt-10kg0t1f9-JLRXDxY_d_vprKWgab0cVw">
              TUM.ai Public Slack
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
