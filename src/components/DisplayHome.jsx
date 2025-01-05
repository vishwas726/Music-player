import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <div className=" h-[90%] overflow-scroll pb-80  flex1 m-auto">
      <Navbar />
      <div className="mt-10">
        <h1 className="text-2xl font-bold mb-3">Popular Albums</h1>

        <div className="cards-container flex overflow-scroll   justify- center gap-6 p-4">
          {albumsData.map((item, id) => ( 
            <AlbumItem
              key={id}
              name={item.name}
              desc={item.desc}
              id={id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-2xl font-bold mb-3">Featured Songs</h1>
        <div className=" flex  gap-6 overflow -scroll overflow-auto">
          {songsData.map((item, id) => (
            <SongItem
              key={id}
              name={item.name}
              desc={item.desc}
              id={id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayHome;
