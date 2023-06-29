import { ELabHero } from "@components/heroes/Elab";
import Stat from "@components/Stat";
import Section from "@components/ui/Section";

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
    </>
  );
}
