import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);

  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },

    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {

    audioRef.current.play()
    setPlayStatus(true)


  }
  const pause = () => {

    audioRef.current.pause()
    setPlayStatus(false)


  }

  const playWithId = async (id) => {

    await setTrack(songsData[id])
    await audioRef.current.play()
    setPlayStatus(true)
  };

  const previous = async (id) => {

    if (track.id > 0) {
      await setTrack(songsData[track.id - 1])
      await audioRef.current.play()
      setPlayStatus(true)

    }
  }


  const next = async (id) => {

   if (track.id < songsData.length-1) {
      await setTrack(songsData[track.id + 1])
      await audioRef.current.play()
      setPlayStatus(true)

    }

  }
    useEffect(() => {
      setTimeout(() => {

        audioRef.current.ontimeupdate = () => {
          let currentSeconds = Math.floor(audioRef.current.currentTime);
          let currentMinutes = Math.floor(currentSeconds / 60);
          let totalSeconds = Math.floor(audioRef.current.duration);
          let totalMinutes = Math.floor(totalSeconds / 60);
          setTime({

            currentTime: {
              second: currentSeconds - currentMinutes * 60,
              minute: currentMinutes,
            },
            totalTime: {
              second: totalSeconds - totalMinutes * 60,
              minute: totalMinutes,
            },
          });
          seekBar.current.style.width = `${(currentSeconds / totalSeconds) * 100}%`;

        }


      }, 1000);


    }, [audioRef])
 
 
    const seekSong= async(e)=>{
          
      let seekWidth = seekBg.current.offsetWidth;
      let seekBarWidth = seekBar.current.offsetWidth;
      let seekBarLeft = seekBar.current.offsetLeft;
      let clickX = e.nativeEvent.offsetX;
      let clickPercent = (clickX / seekWidth);
      let clickSeconds = audioRef.current.duration * clickPercent;
      audioRef.current.currentTime = clickSeconds;
      seekBar.current.style.width = `${clickPercent * 100}%`;

    }
    
    const contextValue = {
      audioRef,
      seekBg,
      seekBar,
      track,
      setTrack,
      playStatus,
      setPlayStatus,
      time,
      setTime,
      play,
      pause,
      playWithId ,
      previous ,
      next,
      seekSong
    };

    return (
      <PlayerContext.Provider value={contextValue}>
        {props.children}
      </PlayerContext.Provider>
    );
  };

  export { PlayerContext, PlayerContextProvider };
