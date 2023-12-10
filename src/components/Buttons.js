import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUtensils, faSwimmer, faHotel, faShoppingCart, faBath, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { cityData } from "../components/Data";
import "./button.css";
import { useParams } from 'react-router-dom';

function Buttons({ menuItems, filterItems, setItems }) {
  const { city } = useParams();
  const cityInfo = cityData[city.toLowerCase()];
  const item1 = cityInfo.categories;

  const categoryIcons = {
    Restaurants: faUtensils,
  
    Cafés: faCoffee,
    Hotels: faHotel,
    Supermarkets: faShoppingCart,
    Hammams: faBath,
    Default: faGlobe, // Icône par défaut
  };

  return (
    <div className='d-flex flex-wrap justify-content-center mb-2'>
      {menuItems.map((val, index) => (
        <button
          key={val}
          className={`btn-dark text-white p-1 px-2 mx-2 my-2 btn fw-bold${index !== menuItems.length - 1 ? ' me-5' : ''}`}
          onClick={() => filterItems(val)}
        >
          <FontAwesomeIcon icon={categoryIcons[val] || categoryIcons.Default} className='me-1' />
          {val}
        </button>
      ))}
      <button className='btn-dark text-white p-1 px-2 mx-2 my-2 btn fw-bold' onClick={() => setItems(item1)}>
        <FontAwesomeIcon icon={categoryIcons.Default} className='me-1' />
        All
      </button>
    </div>
  );
}

export default Buttons;
