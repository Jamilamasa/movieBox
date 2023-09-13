import React from "react";
import { IconContext } from "react-icons";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center m-12">
      {/* Socials */}
      <IconContext.Provider value={{ className: "w-6 h-7" }}>
        <div className="flex justify-between w-60 mb-6">
          {/* Facebook */}
          <a href="https://github.com/jamilamasa" target="_blank">
            <AiFillFacebook />
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/daddyjamal__/" target="_blank">
            <AiOutlineInstagram />
          </a>
          {/* Twitter */}
          <a href="https://twitter.com/Amasa_tech" target="_blank">
            <AiOutlineTwitter />
          </a>
          {/* Youtube */}
          <a href="https://jamilamasa.netlify.app" target="_blank">
            <AiFillYoutube />
          </a>
        </div>
      </IconContext.Provider>
      {/* Links */}
      <div className="flex justify-between  w-[26rem] mb-6">
        {/* Condition of use */}
        <div>
          <h1 className="font-bold text-lg">Conditions of Use</h1>
        </div>
        {/* Privacy and Policy */}
        <div>
          <h1 className="font-bold text-lg">Privacy &amp; Policy</h1>
        </div>
        {/* Press Room */}
        <div>
          <h1 className="font-bold text-lg">Press Room</h1>
        </div>
      </div>
      {/* Copyright */}
      <div>
        <h1 className="text-lg font-[#6B7280]">
          &copy; 2023 MovieBox by Amasa Jamil
        </h1>
      </div>
    </div>
  );
};

export default Footer;
