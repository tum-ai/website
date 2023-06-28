// @ts-nocheck
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind.config.js";
import Button from "@ui/Button";

export function ELabHero() {
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
