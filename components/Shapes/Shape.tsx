import { Float } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
type ShapeProps = {
  r: number
  position: THREE.Vector3
  geometry: THREE.BufferGeometry
  soundEffects: HTMLAudioElement[]
  materials: THREE.Material[]
}

function Shape({ r, position, geometry, soundEffects, materials }: ShapeProps) {
  const meshRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null)
  const [visible, setVisible] = useState(false)

  const getRandomMaterial = () => {
    return gsap.utils.random(materials)
  }
  const startingMaterial = getRandomMaterial()

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    const mesh = e.object as THREE.Mesh

    gsap.utils.random(soundEffects).play()

    gsap.to(mesh.rotation, {
      x: gsap.utils.random(0, 2),
      y: gsap.utils.random(0, 2),
      z: gsap.utils.random(0, 2),
      duration: 1.5,
      ease: 'elastic.out',
    })

    mesh.material = getRandomMaterial()
  }

  const handlePointerOver = () => {
    document.body.style.cursor = 'pointer'
  }

  const handlePointerOut = () => {
    document.body.style.cursor = 'default'
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!meshRef.current) return
      setVisible(true)
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: gsap.utils.random(0.8, 1.2),
        ease: 'bounce.out',
        delay: 0,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <group position={position} ref={meshRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial}
          scale={[1, 1, 1]}
        />
      </Float>
    </group>
  )
}

export { Shape }
