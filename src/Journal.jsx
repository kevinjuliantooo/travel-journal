import React from "react";
import iconMap from "./assets/icon-map.svg"

export default function Journal(props){
    return(
        <div>
            <div className="journal">
                <img src={props.item.imageUrl} alt="image-place" className="journal-image"/>
                <div className="journal-details">
                    <div className="journal-location">
                        <img src={iconMap} alt="icon-map" className="journal-icon-map"/>
                        <p className="journal-text-location">{props.item.location}</p>
                        <p className="journal-google-maps-link"> View on Google Maps</p>
                    </div>
                    

                    <h2 className="journal-title">{props.item.title}</h2>
                    <p>{props.item.startDate} - {props.item.endDate}</p>
                    <p className="journal-description">{props.item.description}</p>
                </div>
            </div>
            <hr />
        </div>
        
        
        
    )
}