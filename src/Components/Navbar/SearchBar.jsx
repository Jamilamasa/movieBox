import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IconContext } from "react-icons";

const SearchBar = () => {
  return (
    <form className="basis-96">
      <div className="relative">
        <input
          id="suffix"
          className="w-full px-2 py-1 border-gray-300 border-solid border-2 rounded-md bg-transparent text-white"
          type="text"
          placeholder="What do you want to watch?"
        />
        <div>
          <button
            type="submit"
            className="absolute inset-0 left-auto p-3 cursor-pointer"
          >
            <IconContext.Provider value={{ className: "text-gray-300" }}>
              <BiSearchAlt />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
