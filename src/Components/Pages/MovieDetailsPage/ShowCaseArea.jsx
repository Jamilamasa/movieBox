import React from "react";
import { getMovieUrl } from "../../../Utility/Utility";
import MovieDescription from "./MovieDescription";
import MovieSerenre from "./MovieSerenre";

const ShowCaseArea = ({ details }) => {
  const imgURL = getMovieUrl(details.backdrop_path)
  const description = {
    title: details?.original_title,
    date: details?.release_date,
    rating: details?.adult ? "PG-18" : "PG-13",
    runtime: details?.runtime,
    genres: details?.genres?.map((genre) => genre.name),
    overView: details?.overview,
    productionCompanies: details?.production_companies
  };
  return (
    <div className="flex5 p-8 grid grid-cols-3 grid-rows-2">
      {/* Showcase Image */}
      <img src={imgURL} alt="display image" className="col-span-3 rounded-xl" />
      {/* Description */}
      <MovieDescription description={description}/>
      {/* Serenre */}
      <MovieSerenre />
    </div>
  );
};

export default ShowCaseArea;
