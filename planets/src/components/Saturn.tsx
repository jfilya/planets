import { MutableRefObject, Ref, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, Euler, Material, Mesh } from "three";

export default function Saturn() {
  const meshRef = useRef<{ [key: string]: string }>();
  useFrame(
    () =>
      ((
        (meshRef as MutableRefObject<{ [key: string]: string }>).current
          .rotation as unknown as Euler
      ).z += 0.003)
  );

  const { nodes, materials } = useGLTF("saturn/saturn.gltf");

  return (
    <>
      <mesh
        ref={
          meshRef as unknown as Ref<Mesh<BufferGeometry, Material | Material[]>>
        }
        geometry={(nodes.Object_6 as Mesh).geometry} 
        material={materials.ring} 
        rotation={[-Math.PI / 2, 0, -0.24]}
        scale={1.5}
      />
      <mesh
        ref={
          meshRef as unknown as Ref<Mesh<BufferGeometry, Material | Material[]>>
        }
        geometry={(nodes.Object_9 as Mesh).geometry} 
        material={materials['Material.002']} 
       
        
      />
    </>
  );
}

useGLTF.preload("saturn/saturn.gltf");
