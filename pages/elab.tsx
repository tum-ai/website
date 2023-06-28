import Section from "@ui/Section";
import Stat from "components/Stat";
import Hero from "../components/Hero";

export default function StatSection() {
  return (
    <>
      <Hero
        imageSrc={"/assets/tumai_bcg_workshop.png"}
        title="Template"
        subtitle="template"
      />
      <Section className="relative overflow-hidden bg-blue-800">
        <h1 className="text-center text-4xl font-bold text-white">
          Last E-Lab
        </h1>
        <div className="sm-gap-4 mx-auto my-12 grid max-w-2xl justify-items-center sm:grid-cols-3">
          <Stat description={"Workshops"} value={"17+"} />
          <Stat description={"Startups"} value={"15"} />
          <Stat description={"Winners"} value={"3"} />
        </div>
        <hr className="text-white" />
        <h2 className="mt-14 text-center text-2xl font-bold text-white">
          Top 3 Startups have
        </h2>
        <div className="mx-auto my-12 grid max-w-md grid-cols-1 justify-items-center gap-y-6 sm:grid-cols-2 md:max-w-4xl md:grid-cols-4">
          <Stat description={"B2B customers"} value={"8"} />
          <Stat description={"funding"} value={"165K"} />
          <Stat description={"revenue"} value={"25K"} />
          <Stat description={"hired employees"} value={"9"} />
        </div>
      </Section>
    </>
  );
}
