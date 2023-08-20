"use client";

import { FC, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

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
  const objectRef = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    objectRef.current.rotation.y += delta;
  });

  return (
    <>
      <OrbitControls makeDefault />

      <mesh ref={objectRef}>
        <boxGeometry />
        <meshBasicMaterial color="#00FF00" />
      </mesh>
    </>
  );
};

export default World;
