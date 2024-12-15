/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';


const BackDrop = () => {
  const shadows = useRef();


  return (
    <AccumulativeShadows 
     ref={shadows}
     temporal
     frames={60}
     alphaTest={0.8}
     scale={10}
     rotation={[Math.PI/2, 0, 0]}
     position={[0, 0, -0.1]}>
      <RandomizedLight 
       amount={4}
       radius={9}
       intensity={2}
       ambient={0.25}
       position={[5, 5, -10]}
      />
      <RandomizedLight 
       amount={4}
       radius={6}
       intensity={0.2}
       ambient={0.5}
       position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  )
}

export default BackDrop