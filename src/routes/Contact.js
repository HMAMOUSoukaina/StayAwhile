import "../components/Contactstyle.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Herocontact(){
    return(
        <>
        <div className="card1">
        <Navbar />
        <ContactForm/>
        </div>
        <Footer/>
         
        </>
    );
}
export default Herocontact;