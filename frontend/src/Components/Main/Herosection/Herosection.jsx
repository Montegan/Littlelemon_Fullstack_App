import React from 'react'
import './Herosection.css'
function Herosection() {
  return (
        <section aria-labelledby='HeroTitle' id='heroID' className='HeroSection'>
            <div className='heroTitleContainer'>
            <h1 id="HeroTitle"> Little Lemon</h1>
            <h2 className='heroSubTitle'>UAE</h2>
            <p className='heroDescription'>We are a family owned Mediterranean restaurant,
            Focused on traditional recipes served with a modern twist</p>
            <button type='button' className='ReserveButton'>Reserve Table</button>
            </div>
            <div className='HeroImgContainer'>
            <img className='HeroImg' src={require('../../../Assets/restaurant chef B.jpg')}  alt='banner of little lemon'/>
            </div>
        </section>
  )
}

export default Herosection