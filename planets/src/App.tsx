import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Earth from "./components/Earth";
import Mercury from "./components/Mercury";
import Venus from "./components/Venus";
import Mars from "./components/Mars";
import Jupiter from "./components/Jupiter";
import Saturn from "./components/Saturn";
import Uranus from "./components/Uranus";
import Neptune from "./components/Neptune";
class App extends React.Component {
  render() {
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
                <Routes>
                  <Route path="/" element={""} />
                  <Route path="/Mercury-palent" element={<Mercury />} />
                  <Route path="/Venus-palent" element={<Venus />} />
                  <Route path="/Earth-palent" element={<Earth />} />
                  <Route path="/Mars-palent" element={<Mars />} />
                  <Route path="/Jupiter-palent" element={<Jupiter />} />
                  <Route path="/Saturn-palent" element={<Saturn />} />
                  <Route path="/Uranus-palent" element={<Uranus />} />
                  <Route path="/Neptune-palent" element={<Neptune />} />
                </Routes>
              </group>
            </group>
          </group>
        </Canvas>
      </div>
    );
  }
}

export default App;
