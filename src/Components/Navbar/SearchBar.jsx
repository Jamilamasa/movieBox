import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const SearchBar = () => {
  return (
    <form className="basis-96">
      <div className="relative">
        <input
          id="suffix"
          className="w-full px-2 py-1 border-black border-solid border-2 rounded-md "
          type="text"
          placeholder="What do you want to watch?"
        />
        <div>
          <button
            type="submit"
            className="absolute inset-0 left-auto p-3 cursor-pointer"
          >
            <BiSearchAlt />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
