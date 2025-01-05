import React from 'react'

const Player2 = () => {
  return (
    <div className="music-player bg-black fixed bottom-0 w-full h-[72px] flex rounded-lg">
    {/* Album Section */}
    <div className="album w-1/4 flex items-center justify-evenly bg-black">
      <div className="album-info flex items-center">
        <img
          src="./assets/card3img.jpeg"
          alt="Album"
          className="h-14 rounded-sm mr-2"
        />
        <div className="dis">
          <p className="album-title font-semibold mb-1">Aye Khuda..</p>
          <p className="album-singer text-opacity-80">by Rahat Fateh</p>
        </div>
      </div>
      <div className="album-icons flex items-center space-x-3">
        <i className="fa-regular fa-heart opacity-70 hover:opacity-100 cursor-pointer"></i>
        <i className="fa-regular fa-window-maximize opacity-70 hover:opacity-100 cursor-pointer"></i>
      </div>
    </div>

    {/* Player Section */}
    <div className="player w-1/2 flex flex-col items-center bg-black">
      <div className="player-controls flex items-center justify-around w-full">
        <img
          src="./assets/player_icon1.png"
          alt="Prev"
          className="h-4 opacity-70 hover:opacity-100 cursor-pointer"
        />
        <img
          src="./assets/player_icon2.png"
          alt="Rewind"
          className="h-4 opacity-70 hover:opacity-100 cursor-pointer"
        />
        <img
          src="./assets/player_icon3.png"
          alt="Play"
          className="h-8 opacity-100 cursor-pointer hover:scale-105"
        />
        <img
          src="./assets/player_icon4.png"
          alt="Forward"
          className="h-4 opacity-70 hover:opacity-100 cursor-pointer"
        />
        <img
          src="./assets/player_icon5.png"
          alt="Next"
          className="h-4 opacity-70 hover:opacity-100 cursor-pointer"
        />
      </div>
      <div className="progress flex items-center justify-between w-3/4 mt-2">
        <span className="text-sm opacity-70">00:00</span>
        <input
          type="range"
          className="range w-3/4 h-1 bg-gray-500 rounded-lg"
          min="0"
          max="100"
          step="1"
        />
        <span className="text-sm opacity-70">33:40</span>
      </div>
    </div>

    {/* Controls Section */}
    <div className="controls w-1/4 flex items-center justify-evenly px-4 bg-black">
      <i className="fa-regular fa-circle-play opacity-70 hover:opacity-100 cursor-pointer"></i>
      <i className="fa-solid fa-microphone-lines opacity-70 hover:opacity-100 cursor-pointer"></i>
      <i className="fa-solid fa-list opacity-70 hover:opacity-100 cursor-pointer"></i>
      <i className="fa-solid fa-headphones opacity-70 hover:opacity-100 cursor-pointer"></i>
      <i className="fa-solid fa-volume-high opacity-70 hover:opacity-100 cursor-pointer"></i>
      <input
        type="range"
        className="val w-1/4 h-1 bg-gray-500 rounded-lg cursor-pointer"
        min="0"
        max="100"
        step="1"
      />
      <i className="fa-solid fa-up-right-and-down-left-from-center opacity-70 hover:opacity-100 cursor-pointer"></i>
    </div>
  </div>
  )
}

export default Player2