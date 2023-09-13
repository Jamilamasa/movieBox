import React from "react";
import { ROOT } from "../../../Routers/Routers";
import { Link, useParams } from "react-router-dom";
import { useSearchMovies } from "../../../Utility/Hooks/movieHooks";
import FeaturedMovies from "../../FeaturedMovies/FeaturedMovies";
import Button from "../../UI/Button";

const MovieSearchPage = () => {
  const { id } = useParams();
  const [movies, loading] = useSearchMovies(id);
  return (
    <>
      <div className="pl-40 mt-8">
        <Link to={ROOT}>
          <Button>Back To HomePage</Button>
        </Link>
      </div>

      {loading && (
        <h1 className="font-bold text-2xl">Loading Please Wait...</h1>
      )}
      {!loading && (
        <FeaturedMovies header="Search Results" topMovies={movies} />
      )}
    </>
  );
};

export default MovieSearchPage;
