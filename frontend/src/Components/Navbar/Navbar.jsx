import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <ul className='navbar-items-wraper'>
        <li className='navbar-Item'><Link to='/'>Home</Link></li>
        <li className='navbar-Item'><Link to='/Fullmenu' >Menu</Link></li>
        <li className='navbar-Item'><Link to='/ContactUs' >ContactUs</Link></li>
        <li className='navbar-Item'><Link to='/Reservetable' >Reservations</Link> </li>
        <li className='navbar-Item'><Link to='/AboutUs'>Aboutus</Link>  </li>
        <li className='navbar-Item'><Link to='/Register'>Login/sinup</Link>  </li>
    </ul>
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