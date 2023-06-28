import {
  Text,
  Sampler,
  Sphere,
  Stars,
  MeshDistortMaterial,
  PointMaterial,
  MeshWobbleMaterial,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind.config.js";
import Button from "@ui/Button";
import { useState } from "react";

export function ELabHero() {
  const fullConfig = resolveConfig(tailwindConfig);
  const [distort, setDistort] = useState(0.3);
  return (
    <section className="-z-10 h-screen">
      <div className="absolute top-0 -z-10 h-full w-full bg-black">
        <Canvas camera={{ position: [1.5, 1.5, 1.5] }}>
          <ambientLight intensity={0.25} />
          <directionalLight intensity={0.9} position={[0, 5, 3]} />

          <Sphere args={[1.5, 32, 32]}>
            <MeshDistortMaterial
              distort={0.25}
              speed={0.5}
              color={fullConfig.theme.colors.purple["600"]}
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
