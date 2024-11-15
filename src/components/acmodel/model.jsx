import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Scene() {
  const meterRef = React.useRef();

  // Add rotation animation
  useFrame(() => {
    if (meterRef.current) {
      meterRef.current.rotation.y += 0.005; // Slow rotation speed
    }
  });

  return (
    <group ref={meterRef}>
      {/* Main meter body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 3, 0.8]} />
        <meshStandardMaterial 
          color="#C0C0C0"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Display screen */}
      <mesh position={[0, 0.2, 0.41]}>
        <boxGeometry args={[1.6, 1, 0.05]} />
        <meshStandardMaterial 
          color="#000000"
          metalness={0.3}
          roughness={0.4}
          emissive="#001133"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Company Name */}
      <Text
        position={[0, 0.8, 0.45]}
        fontSize={0.15}
        color="#00ff00"
        anchorX="center"
        anchorY="middle"
      >
        VoltEdge
      </Text>

      {/* Energy Value Display */}
      <Text
        position={[0, 0.2, 0.45]}
        fontSize={0.2}
        color="#00ff00"
        anchorX="center"
        anchorY="middle"
      >
       Energy: 2.8 kWh
       
      </Text>

      {/* Control buttons panel */}
      <mesh position={[0, -1, 0.41]}>
        <boxGeometry args={[1.6, 0.6, 0.05]} />
        <meshStandardMaterial 
          color="#A9A9A9"
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Border frame */}
      <mesh position={[0, 0, 0.405]}>
        <boxGeometry args={[2.1, 3.1, 0.01]} />
        <meshStandardMaterial 
          color="#A0A0A0"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

const EnergyMeter = () => {
  return (
    <div style={{ width: '350px', height: '400px' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Scene />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={8}
        />
      </Canvas>
    </div>
  );
};

export default EnergyMeter;
