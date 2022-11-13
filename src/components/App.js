import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList"
import hogs from "../porkers_data";
import Filter from "./Filter"

function App() {
	// state held in App because Filter will need access to HogList and it is the common parent
	const [ showGreased, setShowGreased] = useState(false)
	const [ sortBy, setSortBy] = useState("")

	// the greased request is a boolean - this is a setter function saying when handlegreased is called
	// it will switch the opposite of the current state (true or falsse)
	function handleGreased() {
		setShowGreased(showGreased => !showGreased)
	}

	// sortedPigs is a parameter (random name) that will take the place of e.target.value
	// doing it this way b/c can not add periods in a paramenter
	function handleSort(sortedPigs) {
		setSortBy(sortedPigs)
	}
// orinally passed hogs down to show all hogs but updated what is passed down to Hoglist so now only shows greased hogs
// when checked - how app knows what to display
	const hogstoDisplay = hogs
	.filter(hog => (showGreased ? hog.greased : true))
	.sort((hog1, hog2) => {
		if (sortBy === "weight") {
			return hog1.weight - hog2.weight
		} else if (sortBy === "name")
			return hog1.name.localeCompare(hog2.name)
		

	})



	

	return (
		<div className="ui grid container App">
			<div className = "sixteen wide column centered">
				<Nav />
			</div>
			<div className = "sixteen wide column centered">
				<Filter showGreased = {showGreased} handleGreased = {handleGreased} sortBy = {sortBy} handleSort = {handleSort}/>
			</div>
			<div className = "sixteen wide column centered">
				<HogList hogs = {hogstoDisplay}/>
			</div>
		</div>
	);
}

export default App;
