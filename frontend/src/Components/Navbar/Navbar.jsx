import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
function Navbar({firstLoad}) {

  const [clicked,setClicked]=useState(false)
  const [checking,setChecking]=useState(false)
  const navigate= useNavigate();
  const handleClick=()=>{
    setClicked(!clicked)
  }
  return (
    <>
    {firstLoad ? <ul className='navbar-items-wraper'>
        <li className= 'navbar-Item' onClick={handleClick} ><Link to='/' className='navbar-Itemlink'>Home</Link></li>
        <li className='navbar-Item' onClick={handleClick} >Menu</li>
        <li className='navbar-Item' onClick={handleClick}>Reservations </li>
        <li className='navbar-Item' onClick={handleClick} >Aboutus  </li>
        <li className='navbar-Item'><Link to='/Register'  className='navbar-Itemlink' >Login/sinup</Link> </li>
        <span className={clicked ? "showHidden" : "hideDisplay" }>Please,Login or register first</span>
    </ul>:
    <ul className='navbar-items-wraper'>
        <li className='navbar-Item'><NavLink  to='/Homepage' replace className='navbar-Itemlink'>Home</NavLink></li>
        <li className='navbar-Item'><NavLink to='/Fullmenu'  className='navbar-Itemlink' >Menu</NavLink></li>
        <li className='navbar-Item'><NavLink to='/Reservetable' className='navbar-Itemlink' >Reservations</NavLink> </li>
        <li className='navbar-Item'><NavLink to='/AboutUs' className='navbar-Itemlink'>Aboutus</NavLink>  </li>
        <li className='navbar-Item navbar-Itemlink' onClick={()=> setChecking(true)}  >Logout </li>
        <div className={checking ? "showCheck" : "hideCheck"}>
        <h1 className='headerLogout'>Are you sure you want to logout</h1>
        <button className="yesNoButtons" onClick={()=>{navigate("/",{replace:true}); setChecking(false)}}>Yes</button>
        <button className="yesNoButtons" onClick={()=> setChecking(false)}>No</button>
         </div>
    </ul>}
    </>
  )
}

export default Navbar

/* <nav>
    <ul className='navbar-items-wraper'>
        <li className='navbar-Item'><ScrolLink to='heroID' offset={-100} smooth>Home</ScrolLink></li>
        <li className='navbar-Item'><ScrolLink to='OrderOnline' smooth>Menu</ScrolLink></li>
        <li className='navbar-Item'><ScrolLink to='OrderOnline'  smooth>Order</ScrolLink></li>
        <li className='navbar-Item'><ScrolLink to='testimonialsid' offset={-50} smooth>Reservations</ScrolLink> </li>
        <li className='navbar-Item'><ScrolLink to='aboutusroute' offset={-40} smooth>Aboutus</ScrolLink>  </li>
        <li className='navbar-Item'><ScrolLink to='aboutus' offset={-100} smooth>Login/sinup</ScrolLink>  </li>
    </ul>
    </nav> */