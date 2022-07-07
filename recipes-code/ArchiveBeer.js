import React, {useState} from "react";


class ArchiveBeer extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const ratio = this.props.imgUrl.includes("keg.png") ? "alt-ratio" : "";
        const imgClass = "image " + ratio;
       
        const imageClass = "url(" + this.props.imgUrl + ")";
        return(
            <li className="beer-item">
                <div className={imgClass} style={{ backgroundImage: imageClass}}>
                    
                </div>
                <div className="details">
                    <h2>{this.props.name}</h2>
                    <p className="tagline">{this.props.tagline}</p>
                </div>
                <div className="btn-container">
                    <a>See Recipe</a>
                </div>
            </li>
        )
    }
}

export default ArchiveBeer