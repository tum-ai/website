import Section from "@components/ui/Section";
import { team } from "../data/e-lab";
import Person from "@components/Person";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import Link from "next/link";

export default function VentureTeam() {
  return (
    <Section className="bg-purple-950 text-white">
      <div className="mt-8 mb-8 sm:mt-0 md:w-3/5 lg:mb-16">
        <h2 className="mb-12 bg-linear-to-r from-yellow-500 to-red-500 bg-clip-text text-5xl font-semibold text-transparent uppercase">
          Meet the Team behind the AI E-LAB
        </h2>
        <p className="text-2xl">
          <span className="text-yellow-500">
            The AI Entrepreneurship Lab is organized by passionate TUM.ai
            Members
          </span>{" "}
          who are committed to fostering the next generation of AI
          entrepreneurs. Our mission is to ignite your innovative spirit and
          equip you with the relevant know-how to build your own AI startup with
          the help of the Munich Entrepreneurship Ecosystem.
        </p>
      </div>
      <Carousel>
        <CarouselContent>
          {team?.map((person) => (
            <CarouselItem key={person.id}>
              <Person person={person} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-16 text-center">
        <Link
          className="inline-block rounded-full border-2 border-yellow-500 p-4 text-center font-bold text-yellow-500 transition-colors duration-300 hover:bg-yellow-500 hover:text-purple-950"
          href="/e-lab/team"
        >
          See all Team Members
        </Link>
      </div>
    </Section>
  );
}
