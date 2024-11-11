import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Text, OrbitControls } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";
import silverTextureImg from "../assets/greyy.jpg";
import "../components/css/spheres.css";

const Sphere = ({ position, args, label, delay }) => {
  const ref = useRef();
  const textRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const texture = useLoader(THREE.TextureLoader, silverTextureImg);
  const navigate = useNavigate();

  const { scale, pos } = useSpring({
    scale: isHovered ? 1.2 : 1,
    pos: position,
    from: { pos: [0, 0, 0] },
    config: { tension: 170, friction: 26 },
  });

  useFrame((state, delta) => {
    const speed = isHovered ? 1 : 0.2;
    ref.current.rotation.y += delta * speed;

    if (textRef.current) {
      textRef.current.quaternion.copy(state.camera.quaternion);
    }
  });

  const handleClick = () => {
    if (label === "WHY US?") {
      navigate("/about-us"); // Navigate to About Us page
    }
  };

  return (
    <animated.group position={pos}>
      <animated.mesh
        ref={ref}
        scale={scale}
        onPointerEnter={(event) => (
          event.stopPropagation(),setIsHovered(true)
        )}
        onPointerLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <sphereGeometry args={args}/>
        <meshStandardMaterial map={texture} metalness={-1} roughness={1} />
      </animated.mesh>
      {label && (
        <Text
          ref={textRef}
          position={[0, 0, args[0] + 0.08]}
          rotation={[0, 0, 0]}
          fontSize={args[0] * 0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          {label}
        </Text>
      )}
    </animated.group>
  );
};

const Spheres = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getCameraPosition = () => {
    if (viewportWidth <= 480) {
      return [0, 0, 15];
    } else if (viewportWidth <= 768) {
      return [0, 0, 12];
    } else if (viewportWidth <= 1024) {
      return [0, 0, 10];
    } else {
      return [0, 0, 8];
    }
  };

  const getSphereProps = () => {
    if (viewportWidth <= 480) {
      return [
        { position: [0, 0, 0], args: [0.9, 30, 32],label: "WHY US?"  },
        { position: [-1, -0.4, 1.5], args: [0.25, 32, 32], label: "Detail Oriented" },
        { position: [1.2, -0.5, 1.5], args: [0.30, 32, 32], label: "Timeless" },
        { position: [1.3, 0.75, 1.5], args: [0.28, 20, 20], label: "Professional" },
        { position: [-0.70, 1, 1.5], args: [0.25, 32, 32], label: "Efficient" },
        { position: [-1.3, 0.3, 1], args: [0.35, 32, 32], label: "Conceptual" },
      ];
    } else if (viewportWidth <= 768) {
      return [
        { position: [0, 0, 0], args: [0.9, 30, 32],label: "WHY US?"  },
        { position: [-1.2, -0.4, 2], args: [0.25, 32, 32], label: "Detail Oriented" },
        { position: [1.3, -0.2, 2], args: [0.28, 32, 32], label: "Timeless" },
        { position: [1.8, 0.75, 2], args: [0.35, 20, 20], label: "Professional" },
        { position: [-1.5, 1.2, 2], args: [0.25, 32, 32], label: "Efficient" },
        { position: [-2.2, 0.4, 1], args: [0.4, 32, 32], label: "Conceptual" },
      ];
    } else if (viewportWidth <= 1024) {
      return [
        { position: [0, 0, 0], args: [1.0, 30, 32],label: "WHY US?"  },
        { position: [-1.3, -0.6, 2], args: [0.25, 32, 32], label: "Detail Oriented" },
        { position: [1.5, -0.5, 2.5], args: [0.25, 32, 32], label: "Timeless" },
        { position: [1.8, 0.75, 2.5], args: [0.3, 20, 20], label: "Professional" },
        { position: [-0.70, 1.1, 2], args: [0.25, 32, 32], label: "Efficient" },
        { position: [-2.2, 0.4, 1], args: [0.4, 32, 32], label: "Conceptual" },
      ];
    } else {
      return [
        { position: [0, 0, 0], args: [1, 30, 32],label: "WHY US?" },
        { position: [-1.5, -0.8, 2], args: [0.30, 32, 32], label: "Detail Oriented" },
        { position: [1.2, -0.5, 3], args: [0.25, 32, 32], label: "Timeless" },
        { position: [1.4, 0.8, 2], args: [0.30, 20, 20], label: "Professional" },
        { position: [-0.7, 1.1, 2], args: [0.28, 32, 32], label: "Efficient" },
        { position: [-2.2, 0.4, 1], args: [0.38, 32, 32], label: "Conceptual" },
      ];
    }
  };

  const cameraPosition = getCameraPosition();
  const sphereProps = getSphereProps();

  return (
    <div className="spheres-container">
    <Canvas
      camera={{ fov: 30, aspect: window.innerWidth / window.innerHeight, near: 0.1, far: 1000, position: cameraPosition }}
      onCreated={({ gl }) => {
        gl.setPixelRatio(window.devicePixelRatio);
        gl.setSize(window.innerWidth, window.innerHeight);
      }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[0, 6, 6]} intensity={3} />
      {/* <OrbitControls enableZoom={false} enableRotate={false} /> */}
      {sphereProps.map((props, index) => (
        <Sphere key={index} {...props} />
      ))}
    </Canvas>
    </div>
  );
};

export default Spheres;