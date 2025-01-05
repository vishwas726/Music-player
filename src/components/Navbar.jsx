import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faUser } from "@fortawesome/free-regular-svg-icons";
import { MdChevronRight, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div className="hid den st icky -nav flex justify-between items-center bg- [#121212] p-4 stic ky top-0 z-10">
      {/* Navigation Icons */}
      <div className="sticky-nav-icons flex space-x-4">
        {/* <img
          src="./assets/backward_icon.png"
          alt="Backward Icon"
          className="h-5"
        /> */}

<MdOutlineKeyboardArrowLeft  onClick={()=>navigate(-1)} className=" text-[#ffffff9c] cursor-pointer text-[2rem]  md:block" />
<MdOutlineKeyboardArrowRight onClick={()=>navigate(1)}   className=" text-[#ffffff9c] cursor-pointer text-[2rem]  md:block"/>
        {/* <img
          src="./assets/forward_icon.png"
          alt="Forward Icon"
          className="h-5 hidden md:block"
        /> */}
      </div>

      {/* Navigation Options */}
      <div className="sticky-nav-options flex items-center space-x-4">
        {/* Explore Premium Button (Hidden on Small Screens) */}
        <button className="badge bg-white text-black font-bold rounded-full py-1 px-4 hidden md:block hover:scale-105">
          Explore Premium
        </button>

        {/* Install App Button */}
        <button className="badge bg-black text-white font-bold rounded-full py-1 px-4 flex items-center space-x-2 hover:scale-105">
          <FontAwesomeIcon icon={faCircleDown} />
          <span>Install App</span>
        </button>

        {/* User Icon */}
        <div className="user">
          <FontAwesomeIcon
            icon={faUser}
            className="text-xl hover:scale-105 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
