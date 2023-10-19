import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './confirmedBooking.css'
function ConfirmedBooking() {
  const navigate=useNavigate();
  useEffect(()=>{
    setTimeout(()=>navigate("/Homepage"),5000)
  },[])
 
  return (<>
    <div className='ConfirmedMessage'>
    <img className='confirmationIcon' src= {require("../../Assets/OIP.jpeg")} alt="right " />
   <br/> Booking Confirmed, page will be redirected automatically</div>
    </>
  )
}

export default ConfirmedBooking