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
    <>
      <mesh
        ref={
          meshRef as unknown as Ref<Mesh<BufferGeometry, Material | Material[]>>
        }
        geometry={(nodes.Object_4 as Mesh).geometry}
        material={materials["Scene_-_Root"]}
      />
      <mesh
        geometry={(nodes.Object_6 as Mesh).geometry}
        material={materials["Scene_-_Root"]}
        rotation={[-Math.PI / 2, 0, -0.24]}
        scale={1.2}
      />

      <mesh
        geometry={(nodes.Object_8 as Mesh).geometry}
        material={materials["Scene_-_Root"]}
        rotation={[-Math.PI / 2, 0, -0.24]}
        scale={1.3}
      />
      <mesh
        geometry={(nodes.Object_10 as Mesh).geometry}
        material={materials["Scene_-_Root"]}
        rotation={[-Math.PI / 2, 0, -0.24]}
        scale={1.4}
      />
    </>
  );
}

useGLTF.preload("uranus/uranus.gltf");
