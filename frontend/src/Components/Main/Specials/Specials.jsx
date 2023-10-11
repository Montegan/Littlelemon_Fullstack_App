import React from 'react';
import './specials.css';
function Specials() {
  return (
    <section aria-labelledby='SpecialsID' id="OrderOnline" className='SpecialsSection'>
            <div className='SpecialsTitleContainer'>
            <h1 id="SpecialsID"> This weeks specials!</h1>
            <button type='button' className='showMenuButton'> Show full menu</button>
            </div>

            <div className='MenuContanier'>
            <img className='foodImage' src={require('../../../Assets/lemon dessert.jpg')}  alt='banner of little lemon'/>
            <div className='foodNamePricecontainer'>
            <h2 className='foodName'>Lemon dessert</h2>
            <span className='foodPrice' >$12.99</span>
            </div>
            <p className='foodDescription'>We are a family owned Mediterranean restaurant,
            Focused on traditional recipes served with a modern twist</p>
            <button type='button' className='orderButton'>Order a delivery </button>
            </div>

            <div className='MenuContanier'>
            <img className='foodImage' src={require('../../../Assets/greek salad.jpg')}  alt='banner of little lemon'/>
            <div className='foodNamePricecontainer'>
            <h2 className='foodName'>Greek Salad</h2>
            <span className='foodPrice' >$12.99</span>
            </div>
            <p className='foodDescription'>We are a family owned Mediterranean restaurant,
            Focused on traditional recipes served with a modern twist</p>
            <button type='button' className='orderButton'>Order a delivery </button>
            </div>

            <div className='MenuContanier'>
            <img className='foodImage' src={require('../../../Assets/fddine180706_photos.jpg')}  alt='banner of little lemon'/>
            <div className='foodNamePricecontainer'>
            <h2 className='foodName'>Crab Corn</h2>
            <span className='foodPrice' >$12.99</span>
            </div>
            <p className='foodDescription'>We are a family owned Mediterranean restaurant,
            Focused on traditional recipes served with a modern twist</p>
            <button type='button' className='orderButton'>Order a delivery </button>
            </div>
        </section>
  )
}

export default Specials