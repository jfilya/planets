import { MutableRefObject, Ref, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, Euler, Material, Mesh } from "three";

export default function Earth() {
  const meshRef = useRef<{ [key: string]: string }>();
  useFrame(
    () =>
      ((
        (meshRef as MutableRefObject<{ [key: string]: string }>).current
          .rotation as unknown as Euler
      ).z += 0.003)
  );

  const { nodes, materials } = useGLTF("earth/earth.gltf");

  return (
    <mesh
      ref={
        meshRef as unknown as Ref<Mesh<BufferGeometry, Material | Material[]>>
      }
    >
      <mesh
        geometry={(nodes.Object_4 as Mesh).geometry}
        material={materials.Planet}
      />
      <mesh
        geometry={(nodes.Object_6 as Mesh).geometry}
        material={materials.Clouds}
        scale={1.02}
      />
    </mesh>
  );
}

useGLTF.preload("earth/earth.gltf");
