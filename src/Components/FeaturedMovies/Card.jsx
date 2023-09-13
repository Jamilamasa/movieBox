import React from "react";
import { useGenreNames } from "../../Utility/Hooks/movieHooks";
import { getMovieUrl } from "../../Utility/Utility";
import Rating from "../UI/Rating";

const Card = ({ imagePath, title, releaseDate, rating, genre }) => {
  const genreNames = useGenreNames(genre);

  return (
    
    <div className="flex flex-col" data-testid="movie-card">
      {/* Poster */}
      <div>
        <img
          src={getMovieUrl(imagePath)}
          alt={title}
          data-testid="movie-poster"
        />
      </div>
      {/* Info */}
      <div className="flex flex-col">
        {/* Release Date */}
        <p
          className="text-[#9CA3AF] text-xs font-bold mt-4"
          data-testid="movie-release-date"
        >
          {releaseDate}
        </p>
        {/* Title */}
        <h1 className="font-bold text-lg mt-5" data-testid="movie-title">
          {title}
        </h1>
        {/* Rating */}
        <Rating imdbRating={rating} tomatoRating="50" />
        {/* Genre */}
        <p className="text-[#9CA3AF] text-xs font-bold mt-3 mb-20">
          {genreNames.map((genre) => {
            return `${genre} `;
          })}
        </p>
      </div>
    </div>
  );
};

export default Card;
