
import "./HeroStyles.css";
import home_video from '../images/home_video.mp4'

function Hero() {
  return (
    <>
    <div className="hero">
        <video autoPlay muted loop>
          {}
          <source src={home_video} type="video/mp4" />
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
