import "./SectionStyles.css";


function SectionData(props){
    return(
        <div className={props.className}>
        <div className="sec-text">
          <h2 className="title_sec">{props.heading}</h2>
          <p>{props.text}</p>  
        </div>
        <div className="image-sect">
            <img alt="img" src={props.img1}/>
            <img alt="img" src={props.img2}/>
            <img alt="img" src={props.img3}/>
            <img alt="img" src={props.img4}/>
        </div>
    </div>

    )
  }  

export default SectionData;