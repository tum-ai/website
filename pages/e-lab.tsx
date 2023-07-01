import Logos from "@components/Logos";
import Stat from "@components/Stat";
import Button from "@components/ui/Button";
import Section from "@components/ui/Section";
import { partners } from "data/industry";
// @ts-nocheck
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import tailwindConfig from "tailwind.config.js";
import resolveConfig from "tailwindcss/resolveConfig";
import * as THREE from "three";

export default function AIELab() {
  return (
    <>
      <Hero />
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
      <Logos title="1. Premium Sponsors" data={partners} />
      <Logos title="2. Sponsors" data={partners} />
      <Logos title="3. Workshops and more by" data={partners} />
    </>
  );
}

function Hero() {
  const fullConfig = resolveConfig(tailwindConfig);

  return (
    <section className="-z-10 h-screen">
      <div className="absolute top-0 -z-10 h-full w-full bg-black">
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
        <div className="mx-auto max-w-3xl space-y-6 p-8 md:p-16">
          <span>
            <h1 className="text-stroke text-center text-9xl font-bold text-transparent">
              AI
            </h1>
            <h2 className="text-stroke text-4xl font-bold text-transparent sm:text-6xl">
              Entrepreneurship Lab
            </h2>
          </span>

          <p className="max-w-lg text-2xl font-bold">
            Join the AI E-Lab and unlock your potential to shape the future of
            technology
          </p>

          <Button>Apply</Button>
        </div>
      </div>
    </section>
  );
}
