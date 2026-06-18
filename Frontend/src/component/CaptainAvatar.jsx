import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function Head() {
  const ref = useRef();

  useFrame(({ mouse }) => {
    if (ref.current) {
      ref.current.rotation.y = mouse.x * 0.8;
      ref.current.rotation.x = -mouse.y * 0.4;
    }
  });

  return (
    <Float speed={2}>
      <mesh ref={ref}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#22d3ee" />
      </mesh>
    </Float>
  );
}

export default function CaptainAvatar() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={2} />
      <directionalLight position={[2, 2, 2]} />
      <Head />
    </Canvas>
  );
}