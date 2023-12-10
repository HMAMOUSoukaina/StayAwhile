
import "./HeroStyles.css";
import React, { useState } from 'react';


function Hero(props) {
 
  return (
    <>
    <div className={props.cName}>
        <video autoPlay muted loop>
          {}
          <source src={props.herovid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={props.CText}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
    </>
  );
}

export default Hero;
