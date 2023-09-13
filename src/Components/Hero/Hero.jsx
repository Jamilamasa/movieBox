import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroContainer from "../UI/HeroContainer";
import ShowCase from "./ShowCase";

const Hero = () => {
  return (
    <HeroContainer>
      {/* NavBar */}
      <Navbar />
      {/* Showcase Text */}
      <ShowCase />
    </HeroContainer>
  );
};

export default Hero;
