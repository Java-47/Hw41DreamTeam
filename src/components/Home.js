import React, { useState } from "react";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import Hero from "./Hero";
import main from "../Images/main.jpg";
import { ImgHeroContext } from "../utils/constants";

const Home = () => {
  const [imgHero, setHeroUrl] = useState(main);

  return (
    <ImgHeroContext.Provider
      value={{
        imgHero,
        setHeroUrl,
      }}
    >
      <main className="clearfix">
        <Hero />
        <DreamTeam />
        <FarGalaxy />
      </main>
    </ImgHeroContext.Provider>
  );
};

export default Home;
