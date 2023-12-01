import React from 'react';
import './Main.css';
import Testimonials from './Testimonials/Testimonials';
import Aboutus from './Aboutus/Aboutus';
import Herosection from './Herosection/Herosection';
import Specials from './Specials/Specials';
function Main({firstLoad,randomuser}) {
  return (
    <main>
        <Herosection firstLoad={firstLoad}/>
        <Specials firstLoad={firstLoad}/>
        <Testimonials randomuser={randomuser}/>
        <Aboutus/>
    </main>
  )
}

export default Main