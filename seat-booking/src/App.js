import React, {useState} from "react"
import "./App.css"

import FloorSelector from "./components/FloorSelector"
import SeatAvailability from "./components/SeatAvailability"
import SeatMatrix from "./components/SeatMatrix"



import FloorContext from './contexts/FloorContext'

const App = () => {

	const [floors, EditFloors] = useState({
		floorNames: {
		"floor 1": 1,
		"floor 2": 2,
		"floor 3": 3,
		},
		
		totalSeats: 0,
		seatNumbers: []
	})

	return (
		<div className="main container">
			<FloorContext.Provider value={{ floors, changeState: EditFloors }}>
				
				<FloorSelector />
				<SeatMatrix />
				<SeatAvailability />
				
			</FloorContext.Provider>
		</div>
	)
}

export default App
