import React from "react";
import menuIcon from "../../assets/Menu.png";

const SignInBtn = () => {
  return (
    <div className="flex">
      <div>
        <h1 className="text-black font-bold text-base my-1 mx-4">Sign In</h1>
      </div>
      <div>
        <img className="w-9" src={menuIcon} alt="Menu Icon" />
      </div>
    </div>
  );
};

export default SignInBtn;
