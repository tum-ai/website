import Logos from "@components/Logos";
import Button from "@components/ui/Button";
import Section from "@components/ui/Section";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bitter } from "../styles/fonts";
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
import MartinTalk from "@public/assets/partners/martin_talk.jpg";
import type { Metadata } from "next";
import { Hero } from "./hero";
import { Organization, WithContext } from 'schema-dts'

export const metadata: Metadata = {
  title: "TUM.ai - Student Initiative focused on Artificial Intelligence",
  description:
    'TUM.ai is a student initiative based at the Technical University of Munich. We connect students and all relevant stakeholders to facilitate the application of AI across domains to drive positive societal impact through interdisciplinary projects. Together with our highly talented members, we organize Hackathons, Working Student Positions, Research Projects, Lectures, Workshops, Conferences and a Startup Incubator around Artificial Intelligence.',
};



export default function Index() {

  const jsonLd: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TUM.ai',
    legalName: 'TUM.ai e.V.',
    alternateName: [
      'TUM.ai Student Initiative',
    ],
    description: 'TUM.ai is a student initiative based at the Technical University of Munich. We connect students and all relevant stakeholders to facilitate the application of AI across domains to drive positive societal impact through interdisciplinary projects. Together with our highly talented members, we organize Hackathons, Working Student Positions, Research Projects, Lectures, Workshops, Conferences and a Startup Incubator around Artificial Intelligence.',
    url: 'https://www.tum-ai.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/TUM.ai_Logo_Blue_%26_Violet.svg',
    sameAs: [
      'https://www.linkedin.com/company/tum-ai',
      'https://www.instagram.com/tum.ai_official/',
      'https://www.facebook.com/p/Tumai-100064870068663/',
      'https://x.com/TUMai_official',
      'https://www.youtube.com/@tum.aistudentinitiative',
      'http://www.wikidata.org/entity/Q128339659',
      'https://github.com/tum-ai',
      'https://www.crunchbase.com/organization/tum-ai',
      'https://www.reddit.com/r/TUM_ai/',
      'https://www.tiktok.com/@tum.ai_',
      'https://tum-ai.podbean.com/',
      'https://theorg.com/org/tum-ai',
      'https://www.eventbrite.de/o/tumai-31793295023',
    ],
    email: 'contact@tum-ai.com',
    foundingDate: '2020',
    foundingLocation: 'Munich, Germany',
    location: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Rosenheimer Str. 116A',
        postalCode: '81669',
        addressLocality: 'Munich',
        addressCountry: 'Germany',
        contactType: 'Headquarters',
      }, {
        '@type': 'PostalAddress',
        streetAddress: 'Arcisstraße 21',
        postalCode: '80333',
        addressLocality: 'Munich',
        addressCountry: 'Germany',
        contactType: 'Registered office',
      },
    ],
    identifier: {
      '@type': 'PropertyValue',
      name: 'Register of Associations',
      value: 'VR 210726',
    },
    department: [
      {
        '@type': 'Organization',
        name: 'Venture Department',
        description: 'The Venture Department is the entrepreneurial arm of TUM.ai and organizes the AI Entrepreneurship Lab, a 14-week equity-free AI startup incubator.',
        url: 'https://www.tum-ai.com/e-lab',
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'venture@tum-ai.com',
          contactType: 'Venture Department',
        },
        employee: {
          '@type': 'EmployeeRole',
          roleName: 'Head of Venture Department',
          employee: {
            '@type': 'Person',
            name: 'Laurenz Sommerlad',
            identifier: 'laurenz-sommerlad',
            email: 'laurenz.sommerlad@tum-ai.com',
            url: 'https://www.tum-ai.com/e-lab/laurenz-sommerlad',
            sameAs: [
                'https://laurenzsommerlad.com',
                'https://www.linkedin.com/in/laurenzsommerlad/',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'laurenz.sommerlad@tum-ai.com',
              contactType: 'Head of Venture Department',
            }
          },
        },
      }, {
        '@type': 'Organization',
        name: 'Education Department',
        description: 'The Education Department organizes the AI Academy and educational offers, a series of advanced AI workshops featuring hands-on coding tutorials.',
        url: 'https://education.tum-ai.com/',
        sameAs: 'https://lu.ma/ai-academy',
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'education@tum-ai.com',
          contactType: 'Education Department',
        },
      }, {
        '@type': 'Organization',
        name: 'Makeathon Department',
        description: 'The Makeathon Department organizes the Makeathon Competitions, a 3-day hackathon for motivated students and young professionals to develop innovative AI solutions on real-world business cases presented by industry leaders.',
        url: 'https://makeathon.tum-ai.com',
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'makeathon@tum-ai.com',
          contactType: 'Makeathon Department',
        },
      }, {
        '@type': 'Organization',
        name: 'Industry Department',
        description: 'The Industry Department organizes the Industry Project Cooperations, a program where teams of 4x paid working students are deployed to implement data-driven solutions and consult partner companies.',
        url: 'https://www.tum-ai.com/industry',
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'industry@tum-ai.com',
          contactType: 'Industry Department',
        },
      }
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'partners@tum-ai.com',
      contactType: 'partner and sponsorship inquiries',
    },
  }

  return (
      <>
        <section>
          {/* Add JSON-LD to your page */}
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
          />
        </section>
        <Hero/>
        <Content1/>
        <Content2/>
        <div className="relative h-[450px] w-full bg-blend-overlay">
          <div className="absolute z-10 h-full w-full bg-purple-500 opacity-20"></div>
          <Image
              src={"/assets/aibootcamp.jpg"}
              alt=""
              fill
              className="object-cover"
          />
        </div>
        <Content3/>

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
          <Logos logos={partners_collabrated_with}/>
        </Section>

        <Section>
          <h2
              className={cx(
                  "text-uppercase mb-8 w-full text-4xl font-semibold",
                  bitter.className
              )}
          >
            Partner Initiatives
          </h2>
          <Logos logos={initiatives_collabrated_with}/>
        </Section>

        <Slack/>
      </>
  );
}

function Content1() {
  const cards: VerticalCardsProps["cards"] = [
    {
      img: "/assets/home_img4.jpg",
      title: "AI Entrepreneurship Lab",
      text: `14-week equity-free AI startup incubator, access TUM.ai's network to boost your vision and build successful ventures with the full support of the Munich Innovation Ecosystem`,
      subtext: "Applications open in August, program starts in October",
      buttons: [
        {
          href: "https://forms.tum-ai.com/ai-e-lab-3.0-application",
          text: "Apply",
        },
        {
          href: "/e-lab",
          text: "AI E-Lab",
          intent: "tertiary",
        },
      ],
    },
    {
      img: "/assets/home_img1.jpg",
      title: "AI Academy and educational offers",
      text: "a series of advanced AI workshops, featuring hands-on coding tutorials, provided by exciting tech companies, open for everyone!",
      subtext:
        "sponsored online course certificates and company visits are exclusive to TUM.ai members",
      buttons: [
        /*
        {
          href: "https://lu.ma/ai-academy",
          text: "Apply now",
        },

         */
        {
          href: "https://education.tum-ai.com/",
          text: "AI Education",
          intent: "tertiary",
        },
      ],
    },
    {
      img: "/assets/home_img2.png",
      title: "Makeathon Competitions",
      text: "AI product development Hackathon, 48 hours to solve challenges by our sponsors, open for tech and business students, in-person!",
      subtext: "applications closed, stay tuned for the next Hackathon!",
      buttons: [
        // {
        //   href: "https://tally.so/r/3y9LPB",
        //   text: "Apply now",
        // },
        {
          href: "https://makeathon.tum-ai.com/",
          text: "TUM.ai Makeathon",
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
          href: "/industry",
          text: "AI Industry Projects",
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
        <div className="relative h-[450px] w-full rounded-sm">
          <Image
            src={"/assets/aibootcamp.jpg"}
            alt=""
            fill
            className="rounded-sm object-cover"
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

      <div className="mt-12 flex flex-col items-center space-y-2 rounded-sm p-8 text-center">
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
            <Link href="https://join.tum-ai.com/">Learn more!</Link>
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
              <Link href="https://join.tum-ai.com/">Apply as a partner</Link>
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
            className="rounded-sm object-cover"
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
          <Link href="https://join.slack.com/t/tumaipublic/shared_invite/zt-10kg0t1f9-JLRXDxY_d_vprKWgab0cVw">
            <Button>
              <FontAwesomeIcon icon={faSlack} size="xl" className="mr-4" />
                TUM.ai Public Slack
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
