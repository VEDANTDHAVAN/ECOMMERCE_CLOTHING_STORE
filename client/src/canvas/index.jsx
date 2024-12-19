/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from './Shirt';
import BackDrop from "./BackDrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <div className="app">
    <Canvas
     shadows
     camera={{position: [0, 0, 0], fov: 25}}
     gl={{ preserveDraingBuffer: true}}
     className="w-full max-w-full max-h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5}/>
      <Environment preset="city"/>
      <CameraRig>
      <BackDrop />
      <Center>
        <Shirt/>
      </Center>
      </CameraRig>
    </Canvas>
    </div>
  )
}

export default CanvasModel