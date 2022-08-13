import React, { useState, useContext } from "react";
import style from "../css_modules/borderRound.module.css";
import { ImgHeroContext } from "../utils/constants";

const Friend = ({ photo, number }) => {
  const { imgHero, setHeroUrl } = useContext(ImgHeroContext);
  const [imgUrl, setImageUrl] = useState(photo);

  let friendStyle = "col-4 p-1 ";
  if (number === 7) {
    friendStyle += style.bottomLeft;
  }
  if (number === 9) {
    friendStyle += style.bottomRight;
  }

  return (
    <img
      className={friendStyle}
      src={imgUrl}
      alt="friend"
      onClick={() => {
        setImageUrl(imgHero);
        setHeroUrl(imgUrl);
      }}
    />
  );
};

export default Friend;
