"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

import { Shape } from "./Shape";

type GeometryObject = {
  position: THREE.Vector3;
  r: number;
  geometry: THREE.BufferGeometry;
};

const geometries: GeometryObject[] = [
  {
    position: new THREE.Vector3(0, 0, 0),
    r: 0.3,
    geometry: new THREE.IcosahedronGeometry(3), // Gem
  },
  {
    position: new THREE.Vector3(2, -1.75, 4),
    r: 0.4,
    geometry: new THREE.CapsuleGeometry(0.5, 2.6, 2, 16), // Pill
  },
  {
    position: new THREE.Vector3(-2, 2.5, -4),
    r: 0.6,
    geometry: new THREE.DodecahedronGeometry(1.5), // Soccer ball
  },
  {
    position: new THREE.Vector3(-1.8, -1.75, 5),
    r: 0.5,
    geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32), // Donut
  },
  {
    position: new THREE.Vector3(2.6, 1.6, -4),
    r: 0.7,
    geometry: new THREE.TorusKnotGeometry(1.5), // Knot
  },
];

const materials = [
  new THREE.MeshStandardMaterial({
    color: 0x2ecc71,
    roughness: 0,
    metalness: 0.5,
  }),
  new THREE.MeshStandardMaterial({
    color: 0xf1c40f,
    roughness: 0,
    metalness: 0.8,
  }),
  new THREE.MeshStandardMaterial({
    color: 0xe74c3c,
    roughness: 0,
    metalness: 0.7,
  }),
  new THREE.MeshStandardMaterial({
    color: 0x8e44ad,
    roughness: 0,
    metalness: 0.9,
  }),
  new THREE.MeshStandardMaterial({
    color: 0x1abc9c,
    roughness: 0,
    metalness: 0.4,
  }),
  new THREE.MeshStandardMaterial({
    color: 0x2980b9,
    roughness: 0,
    metalness: 0.2,
  }),
  new THREE.MeshStandardMaterial({
    color: 0x2c3e50,
    roughness: 0,
    metalness: 0.7,
  }),
];

const Shapes = () => {
  const [soundEffects, setSoundEffects] = useState<HTMLAudioElement[]>([]);
  useEffect(() => {
    setSoundEffects([
      new Audio("./sounds/impactMining_000.ogg"),
      new Audio("./sounds/impactMining_001.ogg"),
      new Audio("./sounds/impactMining_002.ogg"),
      new Audio("./sounds/impactMining_003.ogg"),
      new Audio("./sounds/impactMining_004.ogg"),
    ]);
  }, []);
  return (
    <div className="row-span-1  h-full md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.2]}
        camera={{
          position: new THREE.Vector3(0, 0, 25),
          fov: 30,
          near: 1,
          far: 40,
        }}
      >
        <Suspense fallback={null}>
          {geometries.map(({ position, r, geometry }) => (
            <Shape
              key={JSON.stringify(position)}
              position={position}
              geometry={geometry}
              soundEffects={soundEffects}
              materials={materials}
              r={r}
            />
          ))}

          <ContactShadows
            position={[0, -4.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />

          <Environment preset="studio" />
          {/* <directionalLight position={[0, 10, 0]} intensity={1} castShadow /> */}
          {/* add a plane */}
          {/* <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -4.5, 0]}
          >
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color={0x2e2e2e} />
          </mesh> */}
          {/* <PerspectiveCamera makeDefault position={[0, 0, 25]} /> */}
          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>
    </div>
  );
};

export { Shapes };
