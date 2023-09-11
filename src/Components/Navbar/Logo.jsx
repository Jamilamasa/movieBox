import React from "react";
import icon from "../../assets/tv.png";

const Logo = () => {
  return (
    <div className="flex justify-between flex-initial">
      {/* Icon */}
      <div>
        <img className="w-12" src={icon} alt="MovieBoxIcon" />
      </div>
      {/* Text */}
      <div>
        <h1 className="text-black font-bold text-2xl my-1 mx-4">MovieBox</h1>
      </div>
    </div>
  );
};

export default Logo;
