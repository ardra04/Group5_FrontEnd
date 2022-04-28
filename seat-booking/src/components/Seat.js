import React, {useContext} from 'react'
import FloorContext from "../contexts/FloorContext"

import './styles/Seat.css'

const Seat = (props) => {
    const { floors } = useContext(FloorContext)
    const context = useContext(FloorContext)

    const seatNumber = props.seatno
    const seatStatus = props.seatColor ? props.seatColor : "seat-grey" 

    const seatClickHandler = (event, seatNumber) => {
        event.stopPropagation()
        const seatColor = document.querySelector(`.seat-${seatNumber}`).classList
        if (floors.seatNumbers.includes(seatNumber)) {
            const newFloorSeats = floors.seatNumbers.filter((seat) => {
                return seat !== seatNumber
            })
            seatColor.remove("seat-black")
            seatColor.add("seat-grey")
            context.changeState({...floors, seatNumbers: newFloorSeats, totalSeats: floors.totalSeats-1 })
        } else {
            seatColor.remove("seat-grey")
            seatColor.add("seat-black")
            context.changeState({...floors, seatNumbers: [...floors.seatNumbers, seatNumber], totalSeats: floors.totalSeats+1 })
        }
    }

    return (
        <div className="col-2 col-md-2">
            <div className={`seat seat-${seatNumber} ${seatStatus}`}
                onClick={(e) => seatClickHandler(e,props.seatno)} />
        </div>
    )
}

export default Seat