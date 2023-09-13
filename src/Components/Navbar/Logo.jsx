import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/tv.png";
import { ROOT } from "../../Routers/Routers";

const Logo = ({color, margin}) => {
  return (
    <Link to={ROOT}>
    <div className={`flex justify-between flex-initial w-48 ${margin}`}>
     
      {/* Icon */}
      <div>
        <img className="w-12" src={icon} alt="MovieBoxIcon" />
      </div>
      {/* Text */}
      <div>
        <h1 className={`text-${color} font-bold text-2xl my-1 mx-4`}>MovieBox</h1>
      </div>
    </div>
    </Link>
  );
};

export default Logo;
