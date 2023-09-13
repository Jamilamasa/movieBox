import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/tv.png";
import { ROOT } from "../../Routers/Routers";

const Logo = () => {
  return (
    <Link to={ROOT}>
    <div className="flex justify-between flex-initial">
     
      {/* Icon */}
      <div>
        <img className="w-12" src={icon} alt="MovieBoxIcon" />
      </div>
      {/* Text */}
      <div>
        <h1 className="text-white font-bold text-2xl my-1 mx-4">MovieBox</h1>
      </div>
    </div>
    </Link>
  );
};

export default Logo;
