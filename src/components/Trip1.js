import './TripStyles.css'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TripDataX from './TripsDataX';
import marrakech from '../images/chaoyue-ding-tvn5IIZtnEU-unsplash.jpg'
import essaouira from '../images/hamza-yasri-CKSpHJNR93U-unsplash.jpg'
import chaouen from '../images/abdelhamid-azoui-rbZ6BrxDh_8-unsplash.jpg'


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
            image={chaouen}
            heading="Trip in Tanger"
            text="Tangier, on Morocco's northern coast, is a captivating blend of history and modernity. Its vibrant medina, bustling markets, and coastal charm make it a compelling destination for travelers seeking a taste of North African allure."
            onClick={() => navigateToDetails("Tanger")}
            />
            <TripDataX
            image={essaouira}
            heading="Trip in Agadir"
            text="Agadir, nestled along Morocco's southern coast, is renowned for its sun-kissed beaches and laid-back atmosphere. With a modern waterfront, vibrant souks, and a backdrop of the Anti-Atlas mountains."
            onClick={() => navigateToDetails("Agadir")}
            />
            <TripDataX
            image={marrakech}
            heading="Trip in Casablanca"
            text="Casablanca, Morocco's bustling economic hub on the Atlantic coast, is a dynamic metropolis characterized by its modern architecture, vibrant markets, and a rich blend of cultures."
            onClick={() => navigateToDetails("Casablanca")}
            />
             
           </div>
        </div>

    )
}
export default Trip;
