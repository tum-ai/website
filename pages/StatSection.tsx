import Section from "@ui/Section";
import Stat from "components/01_atoms/Stat";
import Stat2 from "components/01_atoms/Stat2";
import Hero from "../components/Hero";

export default function StatSection() {
  return (
    <>
      <Hero
        imageSrc={"/assets/tumai_bcg_workshop.png"}
        title="Workshops and Events"
        subtitle="What is TUM.ai all about?"
      />
      <Section className="relative overflow-hidden bg-blue-800">
        <h1 className="text-center text-4xl font-bold text-white">
          Last E-Lab
        </h1>
        <div className="sm-gap-4 mx-auto my-6 grid max-w-2xl justify-items-center sm:grid-cols-3">
          <Stat2 description={"Workshops"} value={"17+"} />
          <Stat2 description={"Startups"} value={"15"} />
          <Stat2 description={"Winners"} value={"3"} />
        </div>
		<hr className="text-white"/>
        <h2 className="text-center text-white text-2xl mt-10">
			Top 3 Startups have
		</h2>
		<div className="gap-y-6 mx-auto my-8 grid max-w-md md:max-w-4xl grid-cols-1 sm:grid-cols-2 justify-items-center md:grid-cols-4">
          <Stat2 description={"B2B customers"} value={"8"} />
          <Stat2 description={"funding"} value={"165K"} />
          <Stat2 description={"revenue"} value={"25K"} />
		  <Stat2 description={"hired employees"} value={"9"} />
        </div>
      </Section>
    </>
  );
}
