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
      geometry={(nodes.pSphere1_lambert3_0 as Mesh).geometry}
      material={materials.lambert3}
    />
  );
}

useGLTF.preload("earth/earth.gltf");
