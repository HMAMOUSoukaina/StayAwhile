import './TripStyles.css'
import { MdReadMore } from "react-icons/md"


function TripData(props){
    return(
        <div className="t-card">
            <div className="t-image">
                <img  src={props.image} alt="imagee"/>
            </div>
            
            <h4 >{props.heading}</h4>
            <p>{props.text}</p>
            <div className="button-container">
                <button className="more-details-btn" onClick={props.onClick}>
                    <MdReadMore />
                    More Details
                </button>
            </div>

        </div>

    )
}
export default TripData;