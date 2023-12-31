/*import "./HeroStyles.css"

function Hero(){
    return(
        <>
        <div className="hero">
    
        <img alt="hero_img" src="https://i.pinimg.com/474x/f6/15/b8/f615b8460e94c50582542b99349f85e1.jpg"/>
        </div>
        <div className="hero-text">
          <h1>Your journey Your Story</h1>
          <p>Choose Your Favourite Destination</p>
         
        </div>

        </>
    );

}
export default Hero;*/
import "./HeroStyles.css";
import hero_video from '../images/home_video.mp4'

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
