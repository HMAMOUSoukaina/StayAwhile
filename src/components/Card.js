import React, { useState } from 'react';
import "./card.css";
import { FaRegHeart, FaRegBookmark, FaHeart, FaBookmark } from "react-icons/fa";

function Card({ items }) {
  // Initialiser un tableau d'états pour chaque carte
  const [cardStates, setCardStates] = useState(items.map(() => ({ like: false, save: false })));

  const handleLikeClick = (index) => {
    // Mettre à jour l'état "like" pour la carte spécifiée par son index
    setCardStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].like = !prevStates[index].like;
      return newStates;
    });
  };

  const handleSaveClick = (index) => {
    // Mettre à jour l'état "save" pour la carte spécifiée par son index
    setCardStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].save = !prevStates[index].save;
      return newStates;
    });
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        {items.map((val, index) => (
          <div key={val.id} className='col-md-4 col-sm-6 card my-3 border-0'>
            <div className='card-img-top text-center'>
              <img src={val.img} alt="" className='w-75' />
              <div className='like-save-icons'>
                {cardStates[index].like ? (
                  <FaHeart className="text-danger" size={25} onClick={() => handleLikeClick(index)} />
                ) : (
                  <FaRegHeart className='like-icon' size={25} onClick={() => handleLikeClick(index)} />
                )}
             
                {cardStates[index].save ? (
                  <FaBookmark size={24} onClick={() => handleSaveClick(index)} />
                ) : (
                  <FaRegBookmark className='save-icon' size={23} onClick={() => handleSaveClick(index)} />
                )}
              </div>
            </div>

            <div className='card-body'>
              <div className='card-title fw-bold fs-4'>
                {val.title}
              </div>
              <div className='card-description'>
                {val.desc}
              </div>
              <div className='card-footer'>
                <a href={val.map} target="_blank" rel="noopener noreferrer" className='map-link'>
                  View on Map
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
