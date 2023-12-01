import "./SectionStyles.css";
import MorMap from "../images/MorMap.mp4"


function SpecialSectionData(props){
    return(
        <div className={props.className}>
        <div className="sec-text">
          <h2 className="title_sec">{props.heading}</h2>
          <p>{props.text}</p>  
        </div>
        <div className="video">
        <video autoPlay muted loop>
          {}
          <source src={MorMap} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        
    </div>

    )
  }  

export default SpecialSectionData;