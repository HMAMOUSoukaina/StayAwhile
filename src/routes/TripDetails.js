import React from 'react';
import Footer from "../components/Footer"
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState } from "react";
import { cityData } from "../components/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../components/Card"; // Assurez-vous d'importer correctement le composant Card
import Buttons from '../components/Buttons';
function TripDetails() {
  
  const { city } = useParams();
  const cityInfo = cityData[city.toLowerCase()];

  const item1=cityInfo.categories;
  const[item,setItems]=useState(item1)

  const menuItems=[...new Set(item1.map((val)=>val.category))]
 const filterItems=(cat)=>{
const newItems=item1.filter((newval)=> newval.category===cat)
setItems(newItems)
 }



  if (!cityInfo) {
    return <div>City not found</div>;
  }

  return (
    
    <div >
     <Navbar/> 
      <div className='container-fluid'>
        <div className='row'>
     
          <h1 className='text-center col-12 fw-bold mt-3 mb-5'>{cityInfo.title}</h1>
           <Buttons
            menuItems={menuItems}
            filterItems={filterItems}
            setItems={setItems}
            
            />
          <Card items={item} /> 
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default TripDetails;
