import React from "react";

function HogDetails ( { hog }) {
// how we want to more info to show up - almost like a hog list for the updated info
    return(
        <div className = "description">
            <strong>Greased Status: {hog.greased ? "GREASED" : "NON-GREASED"} </strong>
            <br/>
            <p>
                Highest medal achieved: {hog["highest medal achieved"]} <strong></strong>
            </p>
            <p>
                Weight as a taion of hog to LG - 24.7 Cu. FT. French Door Refrigerator 
                with Thru-the-Door Ice and Water: <strong>{hog.weight}</strong>
            </p>
        </div>
    )
}

export default HogDetails