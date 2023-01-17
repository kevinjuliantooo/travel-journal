import React from "react";
import iconGlobe from "./assets/icon-globe.svg"

export default function Header(){
    return(
        <div className="header">
            <img src={iconGlobe} alt="icon-globe" className="icon--header"/>
            <h1 className="title--header"> my travel journal.</h1>
        </div>
        
    )
}