/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/*import React from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal , useGLTF, useTexture } from '@react-three/drei';
import state from '../store';

const Shirt = () => {

  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta ));
const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
        <mesh
         castShadow
         geometry={nodes.T_Shirt_male.geometry}
         material={materials.lambert1}
         material-roughness={1}
         dispose={null}
        >
         {snap.isFullTexture && (
            <Decal
             position={[0, 0, 0]}
             rotation={[0, 0, 0]}
             scale={1}
             map={fullTexture}
            />
         )}   
         {snap.isLogoTexture && (
            <Decal
             position={[-0.07, 0.04, 0.15]}
             rotation={[0, 0, 0]}
             scale={0.1}
             map={logoTexture}
             depthTest={false}
             depthWrite={true}
            />
         )}   
        </mesh>
    </group>
  )
}

export default Shirt*/
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  // Rotate the shirt model dynamically
  const shirtRef = React.useRef();

  useFrame((_, delta) => {
    // Update material color smoothly
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);

    // Apply rotation to the model
    if (shirtRef.current) {
      shirtRef.current.rotation.y += 0.01; // Rotate on the Y-axis
      //shirtRef.current.rotation.x += 0.01; // Slight rotation on X-axis (optional)
    }
  });

  const stateString = JSON.stringify(snap);

  return (
    <group ref={shirtRef} key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
        {snap.isLogoTexture && (
          <Decal
            position={[-0.07, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.07}
            map={logoTexture}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
