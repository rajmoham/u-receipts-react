import React from "react";

function Highlight ({title, description, image, reverse}){
    return (
        <div className={"highlight__container" + (reverse ?  " rev" : "")}>
            <div className="highlight__text">
                <h3 className="highlight__title">{title}</h3>
                <p className="highlight__desc">{description}</p>
            </div>
            <div className="highlight__img--wrapper">
                <img src={image} alt="" className="highlight__img"/>
            </div>
        </div>
    )
}

export default Highlight