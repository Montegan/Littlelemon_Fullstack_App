import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
  return (
    <section aria-labelledby='ContactusHeader'  className='footerContainer'>
    <div className='LogoImage'>
    <img  src={require('../../Assets/Logo.png')} height='50px' width='150px' alt=" Little Lemon Logo "  />
    </div>

    <div>
    <ul className='footerNavUl'>
        <li className='footerNavItem'><Link to='/' className='footer-Itemlink'>Home</Link></li>
        <li className='footerNavItem'><Link to='/Fullmenu' className='footer-Itemlink' >Menu</Link></li>
        <li className='footerNavItem'><Link to='/ContactUs' className='footer-Itemlink' >ContactUs</Link></li>
        <li className='footerNavItem'><Link to='/Reservetable' className='footer-Itemlink' >Reservations</Link> </li>
        <li className='footerNavItem'><Link to='/AboutUs' className='footer-Itemlink'>Aboutus</Link>  </li>
        <li className='footerNavItem'><Link to='/Register' className='footer-Itemlink' >Login/sinup</Link>  </li>
    </ul>

    </div>
    <div className='listHeaderWraper'>
    <h1 id='ContactusHeader' className='fotterHeaders'>
    Contact Us
    </h1>
    <ul className='footerContactusUl'>
        <li className='footerNavItem'>0445678 / 0465789</li>
        <li className='footerNavItem'> +971-50234434420</li>
        <li className='footerNavItem'> +971-50653345278</li>
        <li className='footerNavItem'><a href='trabahobraudau-4906@yopmail.com'> helloworld23@gmail.com</a></li>
    </ul>
    </div>
    <div className='listHeaderWraper'>
    <h1 className='fotterHeaders'>
    Social media links
    </h1>
    <ul className='footerSocialmediaUl'>
        <li className='footerNavItem'><a href='https://www.instagram.com/'>Instagram</a></li>
        <li className='footerNavItem'><a href='https://www.facebook.com/'>Facebook</a></li>
        <li className='footerNavItem'><a href='https://twitter.com/'>Twitter</a></li>
        <li className='footerNavItem'><a href='https://www.tiktok.com/explore'>TikTok</a></li>
    </ul>

    </div>
    </section>
  )
}

export default Footer