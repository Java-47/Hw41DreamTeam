import React, { useContext } from "react";
import { ImgHeroContext } from "../utils/constants";

const Hero = () => {
  const { imgHero } = useContext(ImgHeroContext);

  return (
    <section className="float-start me-3 w-25">
      <img className="w-100" src={imgHero} alt="Luke Skywalker" />
    </section>
  );
};

export default Hero;
