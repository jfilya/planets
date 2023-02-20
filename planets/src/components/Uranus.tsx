import { MutableRefObject, Ref, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, Euler, Material, Mesh } from "three";

export default function Uranus() {
  const meshRef = useRef<{ [key: string]: string }>();
  useFrame(
    () =>
      ((
        (meshRef as MutableRefObject<{ [key: string]: string }>).current
          .rotation as unknown as Euler
      ).z += 0.003)
  );

  const { nodes, materials } = useGLTF("uranus/uranus.gltf");

  return (
    <mesh
      ref={
        meshRef as unknown as Ref<Mesh<BufferGeometry, Material | Material[]>>
      }
      geometry={(nodes.Sphere_Material002_0 as Mesh).geometry}
      material={materials["Material.002"]}
      
    />
  );
}

useGLTF.preload("uranus/uranus.gltf");
