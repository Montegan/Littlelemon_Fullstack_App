import React from 'react'
import { Link } from 'react-router-dom'
import './confirmedBooking.css'
function ConfirmedBooking() {
  return (<>
    <div className='ConfirmedMessage'>😁😁😁😁Booking confirmed🎆🎆🎆</div>
    <Link to={'/'} >Home</Link>
    </>
  )
}

export default ConfirmedBooking