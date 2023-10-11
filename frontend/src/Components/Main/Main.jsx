import React from 'react';
import './Main.css';
import Testimonials from './Testimonials/Testimonials';
import Aboutus from './Aboutus/Aboutus';
import Herosection from './Herosection/Herosection';
import Specials from './Specials/Specials';
function Main() {
  return (
    <main>
        <Herosection/>
        <Specials/>
        <Testimonials/>
        <Aboutus/>
    </main>
  )
}

export default Main