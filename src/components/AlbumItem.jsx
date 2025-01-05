import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/album/${id}`);
      }}
     className="card cursor-pointer hover:bg-black border border-black hover:border-blue-600 bg-[#232323] min-w-[180px] rounded-lg p-4 shadow-md hover:scale-105 transition-transform duration-300"
    >
      <img src={image}  className="card-img w-full h-40 object-cover rounded-md" alt="" />
      <p className="card-title text-lg font-semibold mt-3">{name}</p>
      <p className="card-info text-sm text-gray-400">{desc}</p>
    </div>
  );
};


export default AlbumItem;
