import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Notfoundpage() {

  const navigate= useNavigate();
  useEffect(()=>{
    setTimeout(()=>navigate("/Homepage"),5000)
  },[])
 
  return (
    <div className='ConfirmedMessage'> 404 Page not found
    
    </div>

  )
}

export default Notfoundpage