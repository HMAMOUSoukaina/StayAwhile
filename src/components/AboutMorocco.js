import "./AboutMoroccoStyles.css"
import SectionData from "./SectionData"
import SpecialSectionData from "./SpecialSectionData"
import Aesthetic1 from "../images/Aesthetic1.jpeg"
import Aesthetic2 from "../images/Aesthetic2.jpeg"
import Aesthetic3 from "../images/Aesthetic3.jpeg"
import Aesthetic4 from "../images/Aesthetic4.jpeg"



import Food1 from "../images/Food1.jpeg"
import Food2 from "../images/Food2.jpeg"
import Food3 from "../images/Food3.jpeg"
import Food4 from "../images/Food4.jpeg"
import Clothes1 from "../images/Clothes1.jpeg"
import Clothes2 from "../images/Clothes2.jpeg"
import Clothes3 from "../images/Clothes3.jpeg"
import Clothes4 from "../images/Clothes4.jpeg"


export default function AboutMorocco(){

    return(
        <div className="section">
    <h1 className="title">About morocco</h1>
 
    <SpecialSectionData 
    className="first-sec"
    heading="Where is Morocco ?"
    text="Morocco is a North African country situated at the crossroads of Europe and Africa. It is bordered by the Atlantic Ocean and the Mediterranean Sea, sharing land borders with Algeria to the east and the disputed region of Western Sahara to the south."
    
    />

    

    <SectionData 
    heading="Rich History and Culture"
    text="Morocco boasts a diverse cultural heritage shaped by various influences, including Berber, Arab, and European. The historic cities of Marrakech and Fes showcase architectural wonders, while the country's cultural tapestry is woven with vibrant markets, traditional music, and a history that spans centuries."
    className="reverse-sec"
    img1={Aesthetic1}
    img2={Aesthetic2}
    img3={Aesthetic3}
    img4={Aesthetic4}
    
    
    />
    <SectionData 



    heading="The magic of moroccan cuisine"
    text="Morocco's cuisine dances on the taste buds with an enchanting blend of bold flavors and aromatic spices. From iconic tagines to the fragrant couscous, each dish tells a tale of culinary mastery. Sip on ubiquitous mint tea and explore bustling markets, where the air is infused with the sensory delights of spices and the vibrant colors of local produce."
    className="first-sec"
    img1={Food1}
    img2={Food2}
    img3={Food3}
    img4={Food4}
    
    
    />
    <SectionData 
    heading="Traditional elegance"
    text="Moroccan traditional clothing is a captivating blend of history and style. The caftan, adorned with intricate embroidery, reflects grace for special occasions. The everyday djellaba merges comfort with style, while the haik adds mystique for women. Vibrant patterns and meticulous embroidery on the jellaba and kaftan tell tales of Moroccan history. Fassi embroidery turns each piece into art. The turban, a symbol for men, signifies tradition. Rooted in tradition yet embracing contemporary influences."
    className="reverse-sec"
    img1={Clothes1}
    img2={Clothes2}
    img3={Clothes3}
    img4={Clothes4}
    
    
    />
    </div>
    );
}