import "./AboutHeroStyles.css"




export default function AboutHero(props){
    return(
        <div className={props.cName}>
            <img alt="HeroImg" src={props.heroImg}/>
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.paragraph}</p>
                
            </div>

        </div>
    )
}