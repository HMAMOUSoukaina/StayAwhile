

import "./HeroStyles.css";
import hero_video from '../images/hero_video.mp4'

function Hero() {
  return (
    <>
    <div className="hero">
        <video autoPlay muted loop>
          {}
          <source src={hero_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-text">
        <h1>Your journey Your Story</h1>
        <p>Choose Your Favourite Destination</p>
      </div>
    </>
  );
}

export default Hero;
