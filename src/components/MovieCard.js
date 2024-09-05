import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-44 shrink-0">
      <img className="rounded-sm" src={IMG_CDN + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
