import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Hero from "../components/AboutHero";
import TripX from "../components/TripX";

import ServiceImg from "../images/group-people-sitting-top-dune.jpg"
import Trip1 from "../components/Trip1";
import Trip2 from "../components/Trip2";


function Service(){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Service"/>
        <TripX/>
        <Trip1/>
        <Trip2/>
        <Footer />
        </>
    )

}
export default Service;