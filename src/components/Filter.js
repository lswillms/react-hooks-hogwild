import React from "react";

function Filter({ showGreased, handleGreased, sortBy, handleSort }) {

// the onchange function is set the setter function in app to update stated to where the box is checked or not
//  this is how it knows whether checked or not
    function handleToggleGreased(e) {
        handleGreased(e.target.checked)
    }

   function handleSortBy(e) {
        handleSort(e.target.value)
    }

    return (
        <div className="filterWrapper">
            <div className = "ui menu">
                <div className="ui item">
                    <label>Sort By</label>
                </div>
                <div className="ui item">
                    <select
                         className="ui selection dropdown"
                         name = "sort"
                         onChange = {handleSortBy}
                        //  use the state variable as the value
                         value = {sortBy} 

                    >
                        <option value = ""></option>
                        <option value = "name"> Name</option>
                        <option value = "weight"> Weight</option>
                    </select>
                </div>
                <div className= "ui item">
                    <label>Greased Pigs Only?</label>
                </div>
                <div className = "ui item">
                    <input
                        className  = "ui toggle checkbox"
                        // use the state variable at the value - with checkboxes value is checked instead
                        checked = {showGreased}
                        // created function to handle the onchanged and then went up and created
                        onChange = {handleToggleGreased}
                        type = "checkbox"
                    />
                </div>
            </div>

        </div>
    )
}

export default Filter