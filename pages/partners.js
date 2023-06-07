import Header1 from "../components/02_molecules/Header1";

export default function Partners() {
  const cards = [
    {
      img: "https://www.tum-ai.com/assets/img/mainpage_slideshow/alelphalpha_workshop_group.jpg",
      title: "AI Talent Pool",
      text: "Get access to our network of highly motivated students with a specialization in aritifical intelligence technologies. Many of our members are interested in internships and working student positions.",
    },
    {
      img: "https://www.tum-ai.com/assets/img/mainpage_slideshow/richard_talk.jpg",
      title: "Marketing & Awareness",
      text: "As a partner, you will be featured on our website. Plus, we will advertise your company as a supporter of TUM.ai in our marketing campaigns. (3.5k+ followers on LinkedIn) Boost the perception of your brand among students across Munich and beyond.",
    },
    {
      img: "https://www.tum-ai.com/assets/img/mainpage_slideshow/leopold_infineon.jpeg",
      title: "Project Collaborations",
      text: "Being a partner opens the door for many sorts of collaboration, like becoming a challenge setter for our Makeathons, joining for an industry project or hosting networking workshops with our members. We are only limited by your creativity!",
    },
    {
      img: "https://www.tum-ai.com/assets/img/mainpage_slideshow/PnS_map_2023.jpg",
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

      <section className="flex flex-col items-center py-8 container mx-auto">
        <h2 className="text-uppercase text-text text-4xl font-bold mb-8">
          Partners <span className="text-[#5a2de5]">we have collaborated</span>{" "}
          with
        </h2>
        <img
          src="https://www.tum-ai.com/assets/img/partners_sponsors/PnS_Partners_2023_2.png"
          className="w-full rounded"
        />
      </section>

      <section className="py-8 md:py-16 bg-gradient-to-b from-[#151e35] to-[#211b44] text-white">
        <div className="container mx-auto">
          <h2 className="text-uppercase text-white text-4xl font-bold text-center">
            Building the AI ecosystem in Munich, Germany, and worldwide by
            connecting students, industry and academia.
          </h2>

          <hr className="my-8" />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4 mb-4">
              <p className="font-bold text-xl">
                Get access to our exclusive{" "}
                <span className="text-[#a450e6]">
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
              <button className="bg-[#5b2be5] rounded-full px-8 py-2 font-bold text-2xl">
                Become a partner
              </button>
            </div>

            <img src="https://www.tum-ai.com/assets/img/mainpage_slideshow/martin_talk.jpg" />
          </div>
        </div>
      </section>

      <section className="bg-[url('https://www.tum-ai.com/assets/img/mainpage_slideshow/alephalpha_workshop.jpg')]">
        <div className="py-8 md:py-16 grid md:grid-cols-2 gap-4 container mx-auto">
          {cards.map((card) => (
            <article
              key={card.title}
              className="bg-[#223358] text-white text-center h-full p-4"
            >
              <img src={card.img} />
              <h2 className="font-bold my-4 text-2xl">{card.title}</h2>
              <hr className="my-4" />
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
