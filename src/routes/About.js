import AboutHero from '../components/AboutHero';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AboutImg from '../images/AboutImg.jpg'
function About(){
    return(
        <>
        <Navbar />
        <AboutHero 
        cName=".hero"
        heroImg={AboutImg}
        title="About"
        />
        <AboutUs />
        <Footer />
        
        </>
    )

}
export default About;