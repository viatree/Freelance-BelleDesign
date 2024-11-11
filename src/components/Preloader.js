// src/components/Preloader.js
import React, { useState, useEffect } from "react";
import "./css/Preloader.css";
import Bcolor from "../assets/brand/LOGO UNGU.png";
import Bsilver from "../assets/brand/LOGO SILVER.png";

const Preloader = ({ onLoaded }) => {
  const [currentLogo, setCurrentLogo] = useState(Bcolor);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prevLogo) => (prevLogo === Bcolor ? Bsilver : Bcolor));
    }, 500);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      onLoaded();
    }, 2000); // Adjust time as needed

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onLoaded]);

  return (
    <div className="preloader">
      <img src={currentLogo} alt="Preloader Logo" className="preloader-logo" />
    </div>
  );
};

export default Preloader;
