import React from "react";
import HogCard from "./HogCard"


function HogList( {hogs}) {

   
// more details that we want to append to hog card 
    return (
        <div className = "ui three stackable cards"> 
            {hogs.map(hog => ( <HogCard
            hog = {hog}
            key = {hog.name}
            name = {hog.name}
            image = {hog.image}
            specialty = {hog.specialty}
        />
            ))}

        </div>
    )
}

export default HogList