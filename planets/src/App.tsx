import { Canvas } from "@react-three/fiber";
import Earth from "./Earth";

function App() {
  return (
    <div className="App">
      <Canvas
        camera={{
          fov: 90,
          position: [1, 1, 1],
        }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[1, 1, 1]} intensity={0.8} />
        {/* ! */}
        <Earth />
      </Canvas>
    </div>
  );
}

export default App;
