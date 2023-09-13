import React from "react";
import { useEffect } from "react";
import { useTopRatedMovies } from "../../../Utility/Hooks/movieHooks";

import FeaturedMovies from "../../FeaturedMovies/FeaturedMovies";
import Footer from "../../Footer/Footer";
import Hero from "../../Hero/Hero";
import Navbar from "../../Navbar/Navbar";

const HomePage = () => {
  const [topMovies, loading] = useTopRatedMovies();
  
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* Featured Movies */}
      <FeaturedMovies header='Featured Movies' topMovies={topMovies.slice(0,10)}/>
      {/* Footer */}
      <Footer/>
    </>
  );
};

export default HomePage;
