import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, songsData } from "../assets/assets";
import { PlayerContext } from "../Context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  console.log(id);
  const albumData = albumsData[id];
  console.log(albumData);
  const { playWithId } = useContext(PlayerContext);
  return (
    <div className="w-full h-[90%] overflow-auto">
      <Navbar />

      <div className="flex gap-6 flex-col lg:flex-row mt-10 items-center">
        <img src={albumData.image} alt="" />
        <div className="">
          {" "}
          <p>Playlist</p>
          <p className="font-bold text-[2rem]">{albumData.name}</p>
          <p>{albumData.desc}</p>
          <p className="text-[#ffffff93]">Album • 2013 • 12 songs , 54 min 41 sec</p>
        </div>
      </div>

      <div className="  mt-10">
        <div className="flex flex-col gap-6 overflow-auto">
          <div className="flex"></div>
          {songsData.map((item, index) => (
            <div
              onClick={() => playWithId(item.id)}
              key={index}
              className="grid grid-cols-3 gap-5 hover:bg-[#0000003a] p-3 items-center cursor-pointer rounded-lg"
            >
              <img src={item.image} className="w-10" alt="" />
              <p>{item.name}</p>
              <p>{item.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayAlbum;
