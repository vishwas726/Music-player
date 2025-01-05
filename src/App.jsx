import { useContext, useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import {PlayerContext} from "./Context/PlayerContext";

function App() {

  const {audioRef , track}=useContext(PlayerContext);

  return (
    <>
       <div className="main w-full flex h-screen overflow-hidden bg-black text-white">
        <div className="h-[90%] w-full  flex ">
          <Sidebar />
          <Display />
        </div>

        <Player />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </>
  );
}

export default App;
