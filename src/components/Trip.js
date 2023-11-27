import './TripStyles.css'
import TripData from './TripData';
import marrakech from '../images/marrakech.jpg'
import essaouira from '../images/essaouira.jpg'
import chaouen from '../images/chaouen.jpg'

function Trip(){
    return(
        <div className="trip">
            <h1 className="recent_trip">Recent Trips</h1>
            <p className="map_text">you can discover unique destination using Google Maps</p>
           <div className="tripcard">
            <TripData
            image={chaouen}
            heading="Trip in Chefchaouen"
            text="Chefchaouen, perched in the Rif 
            Mountains of Morocco, is famous for
             its mesmerizing blue-painted buildings. 
             The town's serene atmosphere, vibrant markets, 
             and stunning mountain backdrop make it a charming and photogenic destination,
              offering a peaceful retreat for travelers."
            />
            <TripData
            image={essaouira}
            heading="Trip in Essaouira"
            text="Essaouira, perle côtière du Maroc, séduit
             par ses remparts maritimes, ses ruelles 
             pittoresques et son ambiance décontractée,
             offrant une escapade balnéaire authentique."
            />
            <TripData
            image={marrakech}
            heading="Trip in Marrakech"
            text="Marrakech, vibrante et envoûtante,
             séduit par sa place Djemaa el-Fna animée,
              ses marchés colorés et son ambiance
               culturelle riche, offrant une expérience
                marocaine authentique en une seule 
                visite."
            />
           </div>
        </div>

    )
}
export default Trip;
