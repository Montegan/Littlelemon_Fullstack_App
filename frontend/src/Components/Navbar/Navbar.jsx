import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar({firstLoad}) {

  const [clicked,setClicked]=useState(false)
  const handleClick=()=>{
    setClicked(!clicked)
  }
  return (
    <>
    {firstLoad ? <ul className='navbar-items-wraper'>
        <li className= 'navbar-Item' onClick={handleClick}  >Home</li>
        <li className='navbar-Item' onClick={handleClick} >Menu</li>
        <li className='navbar-Item' onClick={handleClick}>Reservations </li>
        <li className='navbar-Item' onClick={handleClick} >Aboutus  </li>
        <li className='navbar-Item'><Link to='/Register' className='navbar-Itemlink' >Login/sinup</Link> </li>
        <span className={clicked ? "showHidden" : "hideDisplay" }>Please,Login or register first</span>
    </ul>:
    <ul className='navbar-items-wraper'>
        <li className='navbar-Item'><Link to='/Homepage' className='navbar-Itemlink'>Home</Link></li>
        <li className='navbar-Item'><Link to='/Fullmenu' className='navbar-Itemlink' >Menu</Link></li>
        <li className='navbar-Item'><Link to='/Reservetable' className='navbar-Itemlink' >Reservations</Link> </li>
        <li className='navbar-Item'><Link to='/AboutUs' className='navbar-Itemlink'>Aboutus</Link>  </li>
        <li className='navbar-Item'><Link to='/Register' className='navbar-Itemlink' >Login/sinup</Link>  </li>
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