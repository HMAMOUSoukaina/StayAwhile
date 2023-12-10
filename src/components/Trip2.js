import './TripStyles.css'
import TripDataX from './TripsDataX';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import rabat from "../images/hamza-nouasria-6O8L1xeCK_w-unsplash.jpg"
import fes from"../images/ben-ostrower-bjNv5Bg6h4U-unsplash.jpg"
import meknes from"../images/othmane-ferrah-MJGQIbW1eA8-unsplash.jpg"

function Trip(){
    const navigate = useNavigate();
    // Fonction pour gérer la navigation vers la page TripDetails
 const navigateToDetails = (city) => {
   // Utilisez la fonction navigate pour changer de route
   navigate(`/trip/${city.toLowerCase().replace(/\s+/g, '-')}`);
 };
    return(
        <div className="trip">
           
           <div className="tripcard">
            
             <TripDataX
            image={fes}
            heading="Trip in Fes"
            text="Fes, nestled in Morocco's heartland, is a city that harmoniously fuses historical allure with contemporary energy. With its enchanting blend of ancient architecture, bustling markets, and diverse cultural influences, Fes offers a distinctive and enriching urban experience."
            onClick={() => navigateToDetails("Fes")}
            />
             <TripDataX
            image={meknes}
            heading="Trip in Meknes"
            text="Meknes, at Morocco's heart, effortlessly blends history with modern vitality. Its captivating mix of ancient architecture, lively markets, and diverse culture offers a unique urban experience."
            onClick={() => navigateToDetails("Meknes")}
            />
             <TripDataX
            image={rabat}
            heading="Trip in Rabat"
            text="Rabat, Morocco's capital along the Atlantic coast, seamlessly blends history with modern vibrancy. Its captivating mix of ancient architecture, lively markets, and diverse culture makes it a unique and enriching urban experience."
            onClick={() => navigateToDetails("Rabat")}
            />
           </div>
        </div>

    )
}
export default Trip;
