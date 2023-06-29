import Logos from "@components/Logos";
import { ELabHero } from "@components/heroes/Elab";
import { partners } from "data/industry";

export default function AIELab() {
  return (
    <>
      <ELabHero />
      <section className="h-[200vh]">
        <h1>Scrolltest</h1>
      </section>
      <Logos title="1. Premium Sponsors" data={partners} />
      <Logos title="2. Sponsors" data={partners} />
      <Logos title="3. Workshops and more by" data={partners} />
    </>
  );
}
