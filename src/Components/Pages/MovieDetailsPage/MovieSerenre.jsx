import React from "react";
import Button from "../../UI/Button";
import { IoTicketSharp } from "react-icons/io5";
import { IoIosOptions } from "react-icons/io";
import something from "../../../assets/something.png";
import Card from "../../UI/Card";

const MovieSerenre = () => {
  return (
    <div className="w-full mt-4 mx-4">
      {/* Buttons */}
      <div>
        <button className="bg-[#BE123C] rounded-md py-2 px-4 w-full">
          <h1 className="text-white flex items-center justify-center ">
            <IoTicketSharp />
            <span className="px-2">See Showtimes</span>
          </h1>
        </button>

        <div className="rounded-md py-2 px-4 w-full border-[#BE123CB2] border bg-[#fcf5f7] text-center my-2 flex items-center justify-center">
          <IoIosOptions />
          <span className="px-2">More Watch</span>
        </div>
      </div>
      {/* Images */}
      <img src={something} alt="movie alt" />
    </div>
  );
};

export default MovieSerenre;
