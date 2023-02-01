import { Canvas } from "@react-three/fiber";
import Earth from "./components/Earth";
import Header from "./components/Header";
import { OrbitControls } from "@react-three/drei";

import React from "react";
import { Route, Routes } from "react-router-dom";

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
          <Routes>
          <Route path="/" element='Hello' />
            <Route path="/Mercury" element={<Earth />} />
            <Route path="/Venus" element={<Earth />} />
            <Route path="/Earth" element={<Earth />} />
            <Route path="/Mars" element={<Earth />} />
            <Route path="/Jupiter" element={<Earth />} />
            <Route path="/Saturn" element={<Earth />} />
            <Route path="/Uranus" element={<Earth />} />
            <Route path="/Neptune" element={<Earth />} />
          </Routes>
          
          
        </Canvas>
      </div>
    );
  }
}

export default App;
