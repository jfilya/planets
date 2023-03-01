import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Solar from "./components/planets/Solar";
import Earth from "./components/planets/Earth";
import Mercury from "./components/planets/Mercury";
import Venus from "./components/planets/Venus";
import Mars from "./components/planets/Mars";
import Jupiter from "./components/planets/Jupiter";
import Saturn from "./components/planets/Saturn";
import Uranus from "./components/planets/Uranus";
import Neptune from "./components/planets/Neptune";
import { Mesh } from "three/src/objects/Mesh";

function App() {
  const { nodes, materials } = useGLTF("space/space.gltf");
  return (
    <div className="App">
      <Header />
      <Canvas
        camera={{
          fov: 90,
          position: [2, 1, 1],
        }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[-1, 1, 1]} intensity={0.8} />

        <OrbitControls />
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                geometry={(nodes.PanoSphere_lambert1_0 as Mesh).geometry} material={materials.lambert1}
              >
                <Routes>
                  <Route path="/" element={<Solar />} />
                  <Route path="/Mercury-palent" element={<Mercury />} />
                  <Route path="/Venus-palent" element={<Venus />} />
                  <Route path="/Earth-palent" element={<Earth />} />
                  <Route path="/Mars-palent" element={<Mars />} />
                  <Route path="/Jupiter-palent" element={<Jupiter />} />
                  <Route path="/Saturn-palent" element={<Saturn />} />
                  <Route path="/Uranus-palent" element={<Uranus />} />
                  <Route path="/Neptune-palent" element={<Neptune />} />
                </Routes>
              </mesh>
            </group>
          </group>
        </group>
      </Canvas>
    </div>
  );
}
useGLTF.preload("space/space.gltf");
export default App;
