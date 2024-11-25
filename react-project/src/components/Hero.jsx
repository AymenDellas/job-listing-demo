import React from "react";

const Hero = () => {
  return (
    <div className="hero flex justify-center items-center h-[40vh] text-white text-center">
      <div className="hero-content">

      <div >
        <h1 className="text-6xl m-2 font-bold text-primary-content">
          Become a <span className="highlighted-text">React Dev</span>
        </h1>
        <h2 className="text-2xl mt-4 text-primary-content">
          Find the React job that fits your skills and needs
        </h2>
      </div>
      </div>
    </div>
  );
};

export default Hero;
