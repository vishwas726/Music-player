import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faPlus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar hidden lg:block bg-black w-[25%] rounded-xl mr-2 p-2 text-white h-screen">
      {/* Navigation Section */}
      <div className="nav bg-[#121212] rounded-lg flex flex-col justify-center h-24 p-3">
        <div className="nav-option flex items-center space-x-4 opacity-100 hover:opacity-100 p-2">
          <FontAwesomeIcon icon={faHouse} className="text-lg" />
          <a href="#" className="text-lg font-bold">Home</a>
        </div>
        <div className="nav-option flex items-center space-x-4 opacity-70 hover:opacity-100 p-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg" />
          <a href="#" className="text-lg font-bold">Search</a>
        </div>
      </div>

      {/* Library Section */}
      <div className="library bg-[#121212] rounded-lg mt-2 h-full p-3">
        <div className="options flex justify-between items-center mb-4">
          <div className="lib-option flex items-center space-x-2">
            <img
              src="./assets/library_icon.png"
              alt="Library Icon"
              className="h-5 w-5"
            />
            <a href="#" className="font-bold">Your Library</a>
          </div>
          <div className="icons flex space-x-4">
            <FontAwesomeIcon icon={faPlus} className="opacity-70 hover:opacity-100" />
            <FontAwesomeIcon icon={faArrowRight} className="opacity-70 hover:opacity-100" />
          </div>
        </div>

        <div className="lib-box h-full mt-8 overflow-auto space-y-4">
          <div className="box bg-[#282828] rounded-lg p-4">
            <p className="text-lg font-semibold mb-2">Create your first playlist</p>
            <p className="text-sm opacity-90 mb-2">It's easy, we'll help you</p>
            <button className=" transition-all duration-200 badge bg-white text-black font-bold rounded-full py-1 px-4 hover:scale-105">
              Create Playlist
            </button>
          </div>
          <div className="box bg-[#282828] rounded-lg p-4">
            <p className="text-lg font-semibold mb-2">Let's find some podcasts to follow</p>
            <p className="text-sm opacity-90 mb-2">
              We'll keep you updated on new episodes
            </p>
            <button className=" transition-all duration-200 badge bg-white text-black font-bold rounded-full py-1 px-4 hover:scale-105">
              Browse Podcasts
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="footer h-48 flex items-center justify-center">
          <div className="foot w-4/5 h-1/2 border-t border-gray-500 opacity-70"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
