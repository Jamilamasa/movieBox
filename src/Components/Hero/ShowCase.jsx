import React from "react";
import Play from "../../assets/Play.png"
import Button from "../UI/Button";
import Rating from "../UI/Rating";

const ShowCase = () => {
  return (

    <div className="flex flex-col w-96 ml-40 mt-36 text-white">
      {/* Featured Movie Title */}
      <div>
        <h1 className="font-bold text-5xl mb-3">John Wick 3 : Parabellum</h1>
      </div>
      {/* Featured Movie Details */}
      <div>
        {/* Rating */}
        <Rating imdbRating='8.6' tomatoRating='97'/>
        {/* Info */}

        <p className="font-medium text-sm mb-3">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>

        {/* Trailer Button */}
        <Button><img src={Play} alt="play" className="inline-block mr-2 w-5"/><p className="inline-block text-sm font-bold">WATCH TRAILER</p></Button>
      </div>
    </div>

    
  );
};

export default ShowCase;
