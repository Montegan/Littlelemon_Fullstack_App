import React from 'react'
import './aboutus.css';
function Aboutus() {
  return (
    <section aria-labelledby='aboutusID' id='aboutusroute' className='aboutusSection'>
    <h1 id="aboutusID">About us</h1>
    <div className='aboutusText'>
    <h1 className='aboutusLogo' >Little lemon</h1>
    <h3 className='aboutusLocation'>UAE</h3>
    <p className='aboutusDescription'> We are a family owned Mediterranean restaurant, Focused on traditional recipes served with a modern twistWe are a family owned Mediterranean restaurant, We are a family owned Mediterranean restaurant, Focused on traditional recipes served with a modern twist Focused on traditional recipes served with a modern twistWe are a family owned Mediterranean restaurant, Focused on traditional recipes served with a modern twist </p>
    </div>
    <div className='aboutusImageContanier'>
    <img className='aboutusimage' src={require('../../../Assets/Mario and Adrian A.jpg')}  /> 
    </div>
    </section>
  )
}

export default Aboutus