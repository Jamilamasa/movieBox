import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate()
  const submitHandler = () => {
    if (searchInput === ''){
      toast.error("Please Enter A Movie Name")
    } else {
      navigate(`/search/${searchInput}`)
    }
  };
  return (
    <form
      className="basis-96"
      onSubmit={(e) => {
        e.preventDefault();
        submitHandler();
      }}
    >
      <div className="relative">
        <input
          id="suffix"
          className="w-full px-2 py-1 border-gray-300 border-solid border-2 rounded-md bg-transparent text-white"
          type="text"
          placeholder="What do you want to watch?"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
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
