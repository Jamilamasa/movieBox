import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between mb-8">
      <div>
        <h1 className="font-bold text-4xl">Featured Movie</h1>
      </div>
      <div><a href="https://jamilamasa.netlify.app" target='_blank' className="text-[#BE123C] text-lg font-normal">See more &gt;</a></div>
    </div>
  );
};

export default Header;
