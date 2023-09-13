import React from "react";

const Header = ({ header, listLength }) => {
  return (
    <div className="flex justify-between mb-8">
      <div>
        <h1 className="font-bold text-4xl">{header}</h1>
      </div>
      {listLength > 0 && (
        <a
          href="https://jamilamasa.netlify.app"
          target="_blank"
          className="text-[#BE123C] text-lg font-normal"
        >
          See more &gt;
        </a>
      )}
    </div>
  );
};

export default Header;
