"use client";

import {
  Canvas,
  MaterialNode,
  extend,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import {
  ChromaticAberration,
  DotScreen,
  EffectComposer,
  Noise,
  Pixelation,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
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
    <>
      <EffectComposer>
        <DotScreen
          blendFunction={BlendFunction.PIN_LIGHT} // blend mode
          angle={Math.PI * 0.5} // angle of the dot pattern
          scale={8.0} // scale of the dot pattern
        />
      </EffectComposer>
      <mesh>
        <planeGeometry args={[0.6, 0.8, 16, 16]} />
        <planeMaterial ref={planeMat} side={DoubleSide} />
      </mesh>
    </>
  );
};

export default World;
