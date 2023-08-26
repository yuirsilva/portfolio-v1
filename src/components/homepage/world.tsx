"use client";

import { MeshTransmissionMaterial, useFBO, useGLTF } from "@react-three/drei";
import {
  Canvas,
  MaterialNode,
  createPortal,
  extend,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import { FC, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { DoubleSide, TextureLoader } from "three";

import PlaneMaterial from "@/components/homepage/shader/planeMaterial";
import { useTheme } from "next-themes";
import { GLTF } from "three-stdlib";

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
        position: [0, 0, 4.2],
      }}
    >
      <Experience />
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
    <Lens>
      <mesh position={[0, 0, -9]} rotation={[-0.4, -0.5, 0]}>
        <planeGeometry args={[1, 1.4, 16, 16]} />
        <planeMaterial ref={planeMat} side={DoubleSide} />
      </mesh>
    </Lens>
  );
};

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh;
  };
};

interface LensProps {
  children: any;
}

const Lens: FC<LensProps> = ({ children }) => {
  const { nodes } = useGLTF("/lens-transformed.glb") as GLTFResult;
  const buffer = useFBO();
  const [scene] = useState(() => new THREE.Scene());
  const { theme } = useTheme();

  const color = {
    dark: new THREE.Color("#44403C"),
    light: new THREE.Color("#D8D7D7"),
  };

  const bgColor = useRef<THREE.Color>(color.dark);

  if (theme) bgColor.current = color[theme as keyof typeof color];

  useFrame((state) => {
    state.gl.setRenderTarget(buffer);
    state.gl.setClearColor(bgColor.current);
    state.gl.render(scene, state.camera);
    state.gl.setRenderTarget(null);
  });

  return (
    <>
      {createPortal(children, scene)}
      <mesh
        scale={[2, 2, 1]}
        rotation={[Math.PI / 2, 0, 0]}
        geometry={nodes.Cylinder.geometry}
      >
        {/* @ts-expect-error idk */}
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          thickness={2}
          anisotropy={0.2}
          chromaticAberration={0.02}
          ior={4}
        />
      </mesh>
    </>
  );
};

export default World;
