import React from "react";
import Logo from "../../Navbar/Logo";
import Card from "../../UI/Card";
import { AiOutlineHome } from "react-icons/ai";
import { BiCameraMovie, BiLogOut } from "react-icons/bi";
import { PiMonitorPlayThin } from "react-icons/pi";
import { BsCalendar3 } from "react-icons/bs";
import { IconContext } from "react-icons";

const Sidebar = () => {
  return (
    <>
      <IconContext.Provider value={{ className: "w-6 h-6" }}>
        <div className="flex-col flex1 border border-black rounded-e-[3rem] h-[100vh] text-center ">
          {/* Logo */}
          <Logo color="black" margin="mt-14 mx-5" />
          {/* Navigation */}
          <ul className="list-none mt-9  flex flex-col">
            <li className="mb-3  p-5 flex items-center justify-center">
              <AiOutlineHome />
              <span className="ml-4 text-xl">Home</span>
            </li>
            <li className="bg-[#f8e7eb] mb-3 p-5 border-r-4 border-solid border-[#be123c] flex items-center justify-center">
              <BiCameraMovie />
              <span className="ml-4 text-xl">Movies</span>
            </li>
            <li className="mb-3 p-5 flex items-center justify-center">
              <PiMonitorPlayThin />
              <span className="ml-4 text-xl">TV Series</span>
            </li>
            <li className="mb-3 p-5 flex items-center justify-center">
              <BsCalendar3 />
              <span className="ml-4 text-xl">Upcoming</span>
            </li>
          </ul>
          {/* Quiz */}
          <Card width="w-44" margin='mx-5'>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-semibold text-base">
                Play movie quizes and earn free tickets
              </h1>
              <p className="font-medium text-xs">50k people are playing now</p>
              <Card>
                <p className="text-xs font-medium text-[#BE123C]">
                  Start Playing
                </p>
              </Card>
            </div>
          </Card>
          {/* Logout */}

          <div className="mb-3 p-5 flex items-center justify-center">
            <BiLogOut />
            <span className="ml-4 text-xl">Logout</span>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
