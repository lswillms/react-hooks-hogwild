import React, { useState}  from "react";
import HogDetails from "./HogDetails";

function HogCard({ hog }) {
// function to show details once the more info button clicked
    const [showDetails , setShowDetails] = useState(false)

    // setter function is a boolean - we are only asking for it to show or not show based on if the 
    // the button is clicked
    function handleDetails() {
        setShowDetails( showDetails=> !showDetails)
    }
// original card that will show on every update
    return(
        <div className = "ui card eight wide column pigTile">
            <div className = "image">
                <img src = {hog.image} alt= "hogPic"/>
            </div>
            <div className="content">
                <h3 className="header">Name: {hog.name}</h3>
                <div className = "description"> Specailty: {hog.specialty} </div>
            </div>
            <div className="extra content">
               {/* setting the logic behind what to show - doing it this way since state lives in the same component */}
                {showDetails ? <HogDetails hog= {hog} />  :null}

                <button onClick = {handleDetails} className="ui button">
                    More Info
                </button>
            </div>
        </div>
    )
}

export default HogCard