import React from "react";
import ReactPlayer from "react-player";
import "./Player.css";

const Player = () => (
  <div className="player-wrapper">
    <ReactPlayer
      url="https://www.youtube.com/watch?v=-X4ikwUwxoE"
      className="react-player"
      playing
      width="10%"
      height="10%"
      controls={false}
    />
  </div>
);

export default Player;