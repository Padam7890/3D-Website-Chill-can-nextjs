"use client"
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Environment } from "@react-three/drei";
import { SodaCan } from "./SodaCan";

interface Soda3DViewProps {
  flavor:
    | "blackCherry"
    | "lemonLime"
    | "grape"
    | "strawberryLemonade"
    | "watermelon"
    | undefined;
}

export default function Soda3DViewr({ flavor }: Soda3DViewProps) {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Floating Soda Can with Scaling */}
        <Float
          speed={1}
          rotationIntensity={1}
          floatIntensity={1}
          floatingRange={[0, 0.3]}
        >
          <SodaCan flavor={flavor} scale={6} /> {/* Increase the scale to make the can larger */}
        </Float>

        {/* Scene environment and controls */}
        <Environment files="/hdr/field.hdr" environmentIntensity={2.5} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
