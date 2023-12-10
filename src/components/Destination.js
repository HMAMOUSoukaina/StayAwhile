import DestinationData from './DestinationData';
import './DestinationStyles.css'
import marzouga1 from '../images/marzouga1.jpg'
import marzouga2 from '../images/marzouga2.jpg'
import jamaa_elFna1 from '../images/jamaa_elFna1.jpeg'
import jamaa_elFna2 from '../images/jamaa_elFna2.jpeg'
const Destination=()=>{
    return(
<div className="destination">
    <h1 className="popular_des">Popular Destinations</h1>
    <p className="tours">Tours give up you the opportunity</p>
    <DestinationData
    className="first-des"
    heading="Jamaa El Fna, Marrakech"
    text="Jamaa El Fna in Marrakech is a vibrant
    square that comes alive with activity.
     By day, it's a colorful market with food
      stalls, musicians, and snake charmers.
       As night falls, the atmosphere intensifies
        with storytellers, magicians, and a variety
         of food vendors offering delicious Moroccan
          cuisine. Surrounded by historic buildings and
           overlooked by the Koutoubia Mosque, Jamaa El Fna 
           is a captivating blend of culture and commerce,
            drawing locals and tourists alike to its lively
             and authentic atmosphere."
    img1={jamaa_elFna1}
    img2={jamaa_elFna2}
    />
    <DestinationData
    className="first-des-reverse"
    heading="Merzouga's Enchanting Desert Symphony"
    text="Merzouga, nestled in the southeastern part of 
    Morocco, is a captivating destination renowned for 
    its mesmerizing Sahara Desert scenery.
     The village is particularly famous for the
      towering sand dunes of Erg Chebbi, some reaching
       heights of 150 meters.
          The ever-shifting sands create a dynamic 
          and visually stunning environment, especially 
          during the enchanting moments of sunrise and 
          sunset. Beyond the natural wonders, Merzouga
           offers glimpses into the traditional Berber
            way of life, with opportunities to stay 
            in desert camps and enjoy the warm hospitality
             of the local people."
    img1={marzouga1}
    img2={marzouga2}
    />


</div>
    );
};
export default Destination;