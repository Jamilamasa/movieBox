import React from "react";
import Card from "./Card";
import Header from "./Header";

const FeaturedMovies = ({ topMovies }) => {
  return (
    <div className="px-40 py-16">
      {/* Header */}
      <Header />
      {/* Grid */}
      <div className="grid gap-4 grid-cols-4">
        {topMovies.map((movie) => {
          return (
            <Card
              key={movie.id}
              imagePath={movie.poster_path}
              title={movie.title}
              releaseDate={movie.release_date}
              rating={movie.vote_average}
              genre={movie.genre_ids}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedMovies;
