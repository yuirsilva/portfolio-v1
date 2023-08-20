"use client";

import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

interface WorldProps {}

const World: FC<WorldProps> = ({}) => {
  return (
    <Canvas>
      <Experience />
    </Canvas>
  );
};

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = ({}) => {
  return (
    <>
      <OrbitControls makeDefault />

      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="#F3DFC1" />
      </mesh>
    </>
  );
};

export default World;
