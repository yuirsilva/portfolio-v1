"use client";

import {
  Canvas,
  MaterialNode,
  extend,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import { FC, Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { DoubleSide, TextureLoader } from "three";

import PlaneMaterial from "@/components/homepage/shader/planeMaterial";

extend({ PlaneMaterial });

declare module "@react-three/fiber" {
  // eslint-disable-next-line no-unused-vars
  interface ThreeElements {
    planeMaterial: MaterialNode<THREE.ShaderMaterial, typeof PlaneMaterial>;
  }
}

interface WorldProps {}

const World: FC<WorldProps> = ({}) => {
  return (
    <Canvas
      camera={{
        fov: 17,
        position: [2, -2, 5],
      }}
      gl={{ antialias: true }}
    >
      <Suspense
        fallback={
          <mesh>
            <planeGeometry args={[0.4, 0.6, 8, 8]} />
            <meshBasicMaterial color="#292524" />
          </mesh>
        }
      >
        <Experience />
      </Suspense>
    </Canvas>
  );
};

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = ({}) => {
  const planeMat = useRef<THREE.ShaderMaterial>(null!);
  const image = useLoader(TextureLoader, "/joan.jpg");

  useFrame(({ clock: { elapsedTime } }) => {
    planeMat.current.uniforms["uTime"].value = elapsedTime;
  });
  useEffect(() => {
    planeMat.current.uniforms["uTexture"].value = image;
  }, [image]);

  return (
    <mesh>
      <planeGeometry args={[0.4, 0.6, 16, 16]} />
      <planeMaterial ref={planeMat} side={DoubleSide} />
    </mesh>
  );
};

export default World;
