import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieDetails } from "../../../Utility/Hooks/movieHooks";
import ShowCaseArea from "./ShowCaseArea";
import Sidebar from "./Sidebar";

const MovieDetailsPage = () => {
  const {id} = useParams()
  const [details, loading] = useMovieDetails(id)
  
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Showcase Area */}
      <ShowCaseArea details={details}/>
    </div>
  );
};

export default MovieDetailsPage;
