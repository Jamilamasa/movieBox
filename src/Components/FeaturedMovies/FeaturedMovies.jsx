import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Header from "./Header";

const FeaturedMovies = ({ topMovies, header }) => {
  return (
    <div className="px-40 py-16">
      {/* Header */}
      <Header header={header} listLength={topMovies.length} />
      {/* Grid */}
      <div className="grid gap-4 grid-cols-4">
        {topMovies.map((movie) => {
          return (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <Card
                
                imagePath={movie.poster_path}
                title={movie.title}
                releaseDate={movie.release_date}
                rating={movie.vote_average}
                genre={movie.genre_ids}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedMovies;
