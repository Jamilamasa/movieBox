import React from "react";
import ShowCaseArea from "./ShowCaseArea";
import Sidebar from "./Sidebar";

const MovieDetailsPage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Showcase Area */}
      <ShowCaseArea />
    </div>
  );
};

export default MovieDetailsPage;
