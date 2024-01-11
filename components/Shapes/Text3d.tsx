import { Float } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FontLoader, TextGeometry } from "three-stdlib";
import helvetiker from "three/examples/fonts/helvetiker_regular.typeface.json";
import * as THREE from "three";

type Text3dProps = {
  text: string;
  position: THREE.Vector3;
  r?: number;
};

function Text3d({ position, text, r = 0.4 }: Text3dProps) {
  const meshRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  const [visible, setVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const font = new FontLoader().parse(helvetiker);
  const geometry = new TextGeometry(text, {
    font,
    size: 1,
    height: 0.2,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
  });

  const startingMaterial = new THREE.MeshStandardMaterial({
    color: 0x2ecc71,
    roughness: 0.8,
    metalness: 1,
  });

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    setIsDragging(true);
  };

  const handlePointerMove = (e: ThreeEvent<MouseEvent>) => {
    if (!isDragging) return;
    const mesh = e.object as THREE.Mesh;
    mesh.position.set(e.point.x, e.point.y, e.point.z);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!meshRef.current) return;
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: gsap.utils.random(0.8, 1.2),
        ease: "bounce.out",
        delay: 0,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <group position={position} ref={meshRef}>
      <Float speed={50 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial}
          scale={[1, 1, 1]}
        />
      </Float>
    </group>
  );
}

export { Text3d };
