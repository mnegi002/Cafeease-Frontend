import React, { useEffect } from "react";
import classes from "./ContainerTop.module.css";
import { NavLink } from "react-router-dom";

function ContainerTop() {
  useEffect(() => {
    const video = document.getElementById("backgroundVideo");
    if (video) {
      video.playbackRate = 3; // Set the playback speed to 1.5x
    }
  }, []);
  return (
    <div className={classes.containertop}>
      <div className={classes.overlay}></div>
      {/* <video id="backgroundVideo" src="./video/video.mp4" autoPlay loop muted /> */}
      <video preload="metadata" autoPlay loop muted>
        <source src="./video/video.mp4" type="video/mp4"/>
      </video>
      <div className={classes.content}>
        <h3>Welcome to </h3>
        <h1>Cafe<span>Ease</span></h1>
        <p style = {{"font-size":"22px"}}> ~ Cafeteria on your finger tips</p>
        <NavLink to='menu'><button>ORDER NOW</button></NavLink>
      </div>
    </div>
  );
}

export default ContainerTop;
