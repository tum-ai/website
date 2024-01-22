"use client";

import Button from "@components/ui/Button";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import Link from "next/link";
import tailwindConfig from "tailwind.config.js";
import resolveConfig from "tailwindcss/resolveConfig";
import * as THREE from "three";

export const Hero = () => {
  const fullConfig = resolveConfig(tailwindConfig);

  return (
    <section className="relative h-screen">
      <div className="absolute top-0 -z-10 h-full w-full bg-blue-800">
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
        <div className="m-auto space-y-8 lg:inline-block">
          <Image
            src={"/assets/logo_new_white_standard.png"}
            alt="Logo"
            width={450}
            height={100}
          />
          <div className="m-auto flex w-fit flex-col items-center justify-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
            <Button asChild>
              <Link href="mailto:partners@tum-ai.com">Become a Partner</Link>
            </Button>
            <Button asChild>
              <Link href="https://join-us.tum-ai.com/">Become a Member</Link>
            </Button>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-16 left-[50%] -translate-x-[50%]"
        onClick={() => window.scrollBy(0, 500)}
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          size="2xl"
          className="animate-bounce text-white"
        />
      </button>
    </section>
  );
};
