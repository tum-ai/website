import Header1 from "../components/02_molecules/Header1";
import Button from "../components/ui/Button"
import Image from "next/image";
import PnSPartners from "../public/assets/partners/PnS_Partners_2023_2.png";
import MartinTalk from "../public/assets/partners/martin_talk.jpg";
import AlelphalphAworkshopGroup from "../public/assets/partners/alelphalpha_workshop_group.jpg";
import RichardTalk from "../public/assets/partners/richard_talk.jpg";
import LeopoldInfineon from "../public/assets/partners/leopold_infineon.jpeg";
import PnSMap from "../public/assets/partners/PnS_map_2023.jpg";
import Section from "components/ui/Section";

export default function Partners() {
  const cards = [
    {
      img: AlelphalphAworkshopGroup,
      title: "AI Talent Pool",
      text: "Get access to our network of highly motivated students with a specialization in aritifical intelligence technologies. Many of our members are interested in internships and working student positions.",
    },
    {
      img: RichardTalk,
      title: "Marketing & Awareness",
      text: "As a partner, you will be featured on our website. Plus, we will advertise your company as a supporter of TUM.ai in our marketing campaigns. (3.5k+ followers on LinkedIn) Boost the perception of your brand among students across Munich and beyond.",
    },
    {
      img: LeopoldInfineon,
      title: "Project Collaborations",
      text: "Being a partner opens the door for many sorts of collaboration, like becoming a challenge setter for our Makeathons, joining for an industry project or hosting networking workshops with our members. We are only limited by your creativity!",
    },
    {
      img: PnSMap,
      title: "Network & Ecosystem",
      text: "We invite you to benefit from our entrepreneurial ecosystem, our own AI startup founders, as well as insights from our own R&D projects. We invite you to leverage our connections to other top university AI clubs, as well as the association to the TUM brand to drive AI in your company.",
    },
  ];

  return (
    <>
      <Header1
        imageSrc={"/assets/partners.jpg"}
        title="Become a partner of TUM.ai"
        subtitle="Get access to Munich's largest student talent pool of AI enthusiasts!"
      />

      <Section background="white">
        <h2 className="mb-8 text-4xl font-bold text-center">
          Partners{" "}
          <span className="text-primary-500">we have collaborated</span> with
        </h2>
        <Image
          src={PnSPartners}
          className="w-full rounded"
          alt="PnS partners"
        />
      </Section>

      <Section background="inverted">
        <h2 className="text-uppercase text-center text-4xl font-bold text-white w-full">
          Building the AI ecosystem in Munich, Germany, and worldwide by
          connecting students, industry and academia.
        </h2>

        <hr className="my-8" />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="mb-4 space-y-4">
            <p className="text-xl font-bold">
              Get access to our exclusive{" "}
              <span className="text-primary-300">
                pre-selected talent pool of AI enthusiasts.
              </span>
              Our members are experienced in software development, data
              science, data engineering and AI business strategy.
            </p>

            <p>
              Joining TUM.ai as a partner or sponsor can support our
              non-profit organization in many ways. Interact with us in our
              signature projects and formats like:
            </p>

            <ul className="list-disc">
              <li>
                <b>Challenge setter</b> for the Makeathon
              </li>
              <li>
                <b>Project partner</b> for an Industry phase
              </li>
              <li>
                <b>Lecturer</b> at the AI academy
              </li>
              <li>
                <b>Workshops</b> at your offices
              </li>
              <li>
                <b>Participant</b> or <b>speaker</b> at our events, e.g. the
                AI summit
              </li>
              <li>
                <b>Sponsorships</b> with logo recognition for other events
              </li>
              <li>
                <b>Mentor</b> for our members
              </li>
              <li>
                <b>Judge</b> or <b>mentor</b> in our in-house AI E-lab
                incubator for startups
              </li>
              <li>
                Post <b>open positions</b> or a master thesis inside our
                talent network
              </li>
            </ul>
            <p>
              We would be more than happy to discuss a long-term collaboration
              with you!
            </p>

            <Button intent="primary">
              Become a partner
            </Button>
          </div>

          <Image src={MartinTalk} alt="Martin talk" />
        </div>

      </Section>

      <Section background="white" backgroundImage="/assets/partners/alephalpha_workshop.jpg">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="h-full bg-primary-900 p-4 text-center text-white"
            >
              <Image src={card.img} alt={card.title} />
              <h2 className="my-4 text-2xl font-bold">{card.title}</h2>
              <hr className="my-4" />
              <p>{card.text}</p>
            </article>
          ))}
        </div>

      </Section>
    </>
  );
}
