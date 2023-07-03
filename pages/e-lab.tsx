import { ELabHero } from "@components/heroes/Elab";
import Stat from "@components/Stat";
import Section from "@components/ui/Section";
import Image from "next/image";

function SliderCard({ imgSrc, name, text }) {
  return (
      <div className="relative h-full w-full min-w-sm rounded-lg grayscale saturate-200 overflow-hidden">
        <Image src={imgSrc} alt={name} layout="fill" objectFit="cover"/>
        <div className="h-3/8 absolute bottom-0 w-full bg-black bg-opacity-80 p-2 text-white backdrop-blur">
          <h2 className="font-bold">{name}</h2>
          <p>{text}</p>
        </div>
      </div>
  );
}

function SnapSlider({ data }) {
  return (
      <div className="snap-x flex overflow-x-auto scrollbar-hide space-x-8 pb-4">
        {data.map((item, index) => (
            <div className="snap-center inline-flex min-w-[220px] min-h-[220px] align-middle" key={index}>
              <SliderCard
                  imgSrc={item.imgSrc}
                  name={item.name}
                  text={item.text}
              />
            </div>
        ))}
      </div>
  );
}

const data = [
  {
    imgSrc: "/assets/partners/richard_talk.jpg",
    name: "Person 1",
    text: "This is person 1",
  },
  {
    imgSrc: "/assets/partners/richard_talk.jpg",
    name: "Person 2",
    text: "This is person 2",
  },
  {
    imgSrc: "/assets/partners/richard_talk.jpg",
    name: "Person 3",
    text: "This is person 3",
  },
  {
    imgSrc: "/assets/partners/richard_talk.jpg",
    name: "Person 1",
    text: "This is person 4",
  },
  {
    imgSrc: "/assets/partners/richard_talk.jpg",
    name: "Person 2",
    text: "This is person 5",
  },
  {
    imgSrc: "/assets/partners/richard_talk.jpg",
    name: "Person 3",
    text: "This is person 6",
  },
  {
    imgSrc: "/assets/partners/richard_talk.jpg",
    name: "Person 1",
    text: "This is person 7",
  },
  {
    imgSrc: "/assets/partners/richard_talk.jpg",
    name: "Person 2",
    text: "This is person 8",
  },
  {
    imgSrc: "/assets/partners/richard_talk.jpg",
    name: "Person 3",
    text: "This is person 9",
  },
  {
    imgSrc: "/assets/partners/richard_talk.jpg",
    name: "Person 1",
    text: "This is person 10",
  },
  {
    imgSrc: "/assets/partners/richard_talk.jpg",
    name: "Person 2",
    text: "This is person 11",
  },
  {
    imgSrc: "/assets/partners/richard_talk.jpg",
    name: "Person 3",
    text: "This is person 12",
  },
];

export default function AIELab() {
  return (
      <>
        <ELabHero />
        <Section className="relative overflow-hidden bg-black">
          text-stroke text-4xl font-bold text-transparent
          <h1 className="text-center text-4xl font-bold text-white">
            Last E-Lab
          </h1>
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
          <h1 className="mb-16 text-center text-4xl font-bold text-white">
            Our mentor network
          </h1>
          <SnapSlider data={data} />
        </Section>
      </>
  );
}
