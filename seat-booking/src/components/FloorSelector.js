import React, { useContext } from "react"
import FloorContext from "../contexts/FloorContext"
import "./styles/Seat.css"

const Header = () => {

	const { floors } = useContext(FloorContext)
	const floorData = useContext(FloorContext)

	const GenerateOptions = () => {
		const floorsObject = floors.floorNames
		return Object.keys(floorsObject).map((floor, key) => {
			return <option value={floor} key={key}>{floor}</option>
		})
	}

	const floorSwitchHandler = (e) => {
		
		floorData.changeState({...floors})
	}

	return (
		<div className="container" style={{ textAlign: "center" }}>
			<select className="floor-selector" onChange={floorSwitchHandler}>
				{GenerateOptions()}
			</select>
		</div>
	)
}

export default Header
