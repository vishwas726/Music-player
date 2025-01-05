import React, { useContext } from "react";
import { PlayerContext } from "../Context/PlayerContext";

const SongItem = ({ image, name, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playWithId(id)}
      className="p-4 min-w-[200px] max-w-[220px] rounded-xl bg-[#232323] hover:bg-black border border-black hover:border-blue-600 cursor-pointer transition-colors duration-300"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <p className="text-lg font-semibold text-white truncate">{name}</p>
      <p className="text-sm text-gray-400 line-clamp-2">{desc}</p>
    </div>
  );
};

export default SongItem;
