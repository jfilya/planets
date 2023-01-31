
import { MutableRefObject, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Earth() {
  const meshRef = useRef<any>();
  useFrame(() => ((meshRef as MutableRefObject<any>).current.rotation.z += 0.003));

  const { nodes, materials } = useGLTF("earth/earth.gltf");

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            ref={meshRef}
            geometry={(nodes as any).Object_6.geometry}
            material={materials["Planet"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("earth/earth.gltf");