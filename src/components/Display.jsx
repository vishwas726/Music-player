import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { use } from "react";
import { albumsData } from "../assets/assets";

const Display = () => {
  const displayRef = useRef();

  const location = useLocation();

  const isAlbum = location.pathname.includes("album");

  useEffect(() => {
    if (isAlbum) {
      const albumId = isAlbum ? location.pathname.slice(-1) : -1;
      const bgColor = albumsData[Number(albumId)].bgColor;
      console.log(bgColor);
      displayRef.current.style.background = `linear-gradient(${bgColor} , #121212)`;
    } else {
      displayRef.current.style.background = "#121212";
    }
  }, [location]);

  return (
    <div
      ref={displayRef}
      className=" w-full lg:w-[75%]  h-screen m- 2 p-4 h- full bg-[#121212] rounded-xl "
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
