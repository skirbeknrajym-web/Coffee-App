import { GLView } from 'expo-gl';
import { Renderer, THREE } from 'expo-three';
import React, { useEffect } from 'react';
 import { Dimensions } from "react-native";

const width = 100
const height = 100
const CoffeeCupScreen = () => {
  const { width, height } = Dimensions.get("screen")
  useEffect(() => {
    const onContextCreate = async (gl) => {
      const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      const renderer = new Renderer({ gl });
      renderer.setSize(width, height);

      // Load the coffee cup model
      const loader = new THREE.OBJLoader();
      
      const model = await new Promise((resolve, reject) => {
        loader.load(
          '../../../assets/images/coffee_cup_obj.obj',
          (object) => resolve(object),
          undefined,
          reject
        );
      });

      scene.add(model);

      // Adjust camera position and rotation
      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);

        // Perform any necessary animations or updates here

        renderer.render(scene, camera);
        gl.endFrameEXP();
      };

      animate();
    };

    const render = ({ gl, width, height }) => {
      gl.viewport(0, 0, width, height);
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      onContextCreate(gl);
    };

    return <GLView style={{ flex: 1 }} onContextCreate={render} />;
  }, []);

  return null;
};

export default CoffeeCupScreen;
