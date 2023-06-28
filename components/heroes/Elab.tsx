import {
  useFBO,
} from "@react-three/drei";
import { Canvas, createPortal, extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind.config.js";
import Button from "@ui/Button";
import { useMemo, useRef } from "react";

import SimulationMaterial from './shaders/SimulationMaterial';

import vertexShader from './shaders/vertexShader';
import fragmentShader from './shaders/fragmentShader';

extend({ SimulationMaterial: SimulationMaterial });

const FBOParticles = () => {
  const size = 512;

  const points = useRef<any>();
  const simulationMaterialRef = useRef<any>();

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1);
  const positions = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0]);
  const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]);

  const renderTarget = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    stencilBuffer: false,
    type: THREE.FloatType,
  });

  const particlesPosition = useMemo(() => {
    const length = size * size;
    const particles = new Float32Array(length * 3);
    for (let i = 0; i < length; i++) {
      let i3 = i * 3;
      particles[i3 + 0] = (i % size) / size;
      particles[i3 + 1] = i / size / size;
    }
    return particles;
  }, [size]);

  const uniforms = useMemo(() => ({
    uPositions: {
      value: null,
    }
  }), [])

  useFrame((state) => {
    const { gl, clock } = state;

    gl.setRenderTarget(renderTarget);
    gl.clear();
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    points.current.material.uniforms.uPositions.value = renderTarget.texture;

    simulationMaterialRef.current.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <>
      {createPortal(
        <mesh>
          <simulationMaterial ref={simulationMaterialRef} args={[size]} />
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-uv"
              count={uvs.length / 2}
              array={uvs}
              itemSize={2}
            />
          </bufferGeometry>
        </mesh>,
        scene
      )}
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </points>
    </>
  );
};

export function ELabHero() {
  const fullConfig = resolveConfig(tailwindConfig);

  return (
    <section className="-z-10 h-screen">
      <div className="absolute top-0 -z-10 h-full w-full bg-black">
        <Canvas camera={{ position: [1.5, 1.5, 1.5] }}>
          <ambientLight intensity={0.25} />
          <directionalLight intensity={0.9} position={[0, 5, 3]} />

          <FBOParticles />
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
