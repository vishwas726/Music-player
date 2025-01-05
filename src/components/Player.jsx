import React, { useContext } from "react";
import { songsData, assets } from "../assets/assets";
import { PlayerContext } from "../Context/PlayerContext";
const Player = () => {

  const {seekBg,seekBar ,playStatus ,seekSong, track, play , pause ,time , previous ,next}=useContext(PlayerContext)
  return (
    <div className="p-4 min-h-[80px] space-y-6 lg:space-y-0 flex-col lg:flex-row justify-between flex items-center px-4 absolute w-full bottom-0 bg-[#000000]">
      <div className="flex gap-4">
        <img src={track.image} className="w-10" alt="" />

        <div className="">
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-7">
          <img  className="cursor-pointer w-4" onClick={previous} src={assets.prev_icon} alt="" />
          {playStatus ?<img onClick={pause} className="cursor-pointer w-4" src={assets.pause_icon} alt="" />  :<img onClick={play}  className="cursor-pointer w-4" src={assets.play_icon} alt="" />}
         

          <img className="cursor-pointer w-4" onClick={next} src={assets.next_icon} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <p>{time.currentTime.minute }:{ time.currentTime.second}</p>
          <div onClick={seekSong} ref={seekBg} className="bg-gray-500 cursor-pointer h-fit w-[60vw] max-w-[500px] rounded-full">
            <hr ref={seekBar} className="bg-green-700 h-1 w-[0%] border-none rounded-full" />
          </div>
          <p>{time.totalTime.minute }:{ time.totalTime.second}</p>
        </div>
      </div>

      <div className="lg:flex items-center gap-4 hidden ">

        <img className="cursor-pointer w-4" src={assets.volume_icon} alt="" />
        <div className="bg-gray-500 h-fit w-[100px] [60vw] max- w- [20px] rounded-full">
            <hr className="bg-green-700 border-none w-20 cursor-pointer h-2 rounded-full" />
          </div>
        {/* <img className="cursor-pointer w-4" src={assets.fullscreen_icon} alt="" /> */}
        
      </div>
    </div>
  );
};

export default Player;
