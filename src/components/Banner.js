import arrowImg from "../images/icon-arrow-down.svg";

const Banner = ({ motto })=>{
   
    return (
        <div className="auto-header">
        <div className="banner">
            <div className="banner-text" >{ motto }</div>
        </div>
        <div className="arrOverlay">
               <img src={arrowImg}/>
           </div>
    </div>
    )
}

export default Banner