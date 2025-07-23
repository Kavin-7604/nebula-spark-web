import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingAvatar = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshPhongMaterial>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
    
    if (materialRef.current) {
      // Animate the emissive color for a glowing effect
      const intensity = Math.sin(state.clock.elapsedTime * 2) * 0.3 + 0.5;
      materialRef.current.emissive.setHSL(0.5, 1, intensity * 0.2);
    }
  });

  return (
    <group>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 2]} />
        <meshPhongMaterial
          ref={materialRef}
          color="#00ffff"
          shininess={100}
          specular="#ffffff"
          emissive="#001133"
          transparent
          opacity={0.9}
        />
      </mesh>
      <pointLight position={[2, 2, 2]} intensity={1} color="#00ffff" />
      <pointLight position={[-2, -2, -2]} intensity={0.5} color="#ff00ff" />
    </group>
  );
};

export default FloatingAvatar;