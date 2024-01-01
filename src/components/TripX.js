import './TripStyles.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TripDataX from './TripsDataX';
import marrakech from '../images/marrakech.jpg';
import essaouira from '../images/essaouira.jpg';
import chaouen from '../images/chaouen.jpg';

function TripX() {
  const navigate = useNavigate();

  // Fonction pour gérer la navigation vers la page TripDetails
  const navigateToDetails = (city) => {
    // Utilisez la fonction navigate pour changer de route
    navigate(`/trip/${city.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="trip">
      <h1 className="recent_trip">Trips:</h1>
      <p className="map_text">you can discover your destination:</p>
      <div className="tripcard">
        <TripDataX
          image={chaouen}
          heading="Trip in Chefchaouen"
          text="Chefchaouen, perched in the Rif 
            Mountains of Morocco, is famous for
             its mesmerizing blue-painted buildings. 
             The town's serene atmosphere, vibrant markets, 
             and stunning mountain backdrop make it a charming and photogenic destination,
              offering a peaceful retreat for travelers."
          onClick={() => navigateToDetails("Chefchaouen")}
        />
        <TripDataX
          image={essaouira}
          heading="Trip in Essaouira"
          text="Essaouira, perle côtière du Maroc, séduit
             par ses remparts maritimes, ses ruelles 
             pittoresques et son ambiance décontractée,
             offrant une escapade balnéaire authentique."
          onClick={() => navigateToDetails("Essaouira")}
        />
        <TripDataX
          image={marrakech}
          heading="Trip in Marrakech"
          text="Marrakech, vibrante et envoûtante,
             séduit par sa place Djemaa el-Fna animée,
              ses marchés colorés et son ambiance
               culturelle riche, offrant une expérience
                marocaine authentique en une seule 
                visite."
          onClick={() => navigateToDetails("Marrakech")}
        />
      </div>
    </div>
  );
}

export default TripX;
