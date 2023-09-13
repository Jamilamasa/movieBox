import React from "react";
import imdb from "../../assets/IMDb.png";
import tomato from "../../assets/Tomato.png";

const Rating = ({imdbRating, tomatoRating}) => {
  return (
    <div className="flex mb-3">
      {/* IMDb */}
      <div className="mr-4">
        <img src={imdb} alt="IMDb logo" className="inline-block h-4" />{" "}
        <p className="inline-block text-xs">{imdbRating}/10</p>
      </div>
      {/* Rotten Tomato */}
      <div className="ml-4">
        <img src={tomato} alt="IMDb logo" className="inline-block h-4" />{" "}
        <p className="inline-block text-xs">{tomatoRating}&#37;</p>
      </div>
    </div>
  );
};

export default Rating;
