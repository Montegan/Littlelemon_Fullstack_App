import React from 'react'
import './testimonials.css'
function Testimonials() {
  return (
    <section aria-labelledby='testimonialsID' id='testimonialsid' className='testimonialsSection'>

           <div className='TestimonialsTitleContainer'>
            <h1 id="testimonialsID"> Testimonials</h1>
            </div>

            <div className='TestimonialsItemContanier'>
            <img className='customerImg'  src= {require('../../../Assets/greek salad.jpg')} alt='hello '/>
            <div className='customerNameRating'>
            <h2 className='cutomerName'>Simon Fasil</h2>
            <span className='customerRating' >⭐⭐⭐⭐⭐</span>
            </div>
            <p className='customerDescription' >We are a family owned Mediterranean restaurant, Focused on traditional recipes. served with a modern twist. owned Mediterranean restaurant, Focused on traditional recipes. served with a modern twist</p>
            </div>

            <div className='TestimonialsItemContanier'>
            <img className='customerImg'  src= {require('../../../Assets/greek salad.jpg')} alt='hello '/>
            <div className='customerNameRating'>
            <h2 className='cutomerName'>Simon Fasil</h2>
            <span className='customerRating' >⭐⭐⭐⭐⭐</span>
            </div>
            <p className='customerDescription' >We are a family owned Mediterranean restaurant, Focused on traditional recipes. served with a modern twist. owned Mediterranean restaurant, Focused on traditional recipes. served with a modern twist</p>
            </div>

            <div className='TestimonialsItemContanier'>
            <img className='customerImg'  src= {require('../../../Assets/greek salad.jpg')} alt='hello '/>
            <div className='customerNameRating'>
            <h2 className='cutomerName'>Simon Fasil</h2>
            <span className='customerRating' >⭐⭐⭐⭐⭐</span>
            </div>
            <p className='customerDescription' >We are a family owned Mediterranean restaurant, Focused on traditional recipes. served with a modern twist. owned Mediterranean restaurant, Focused on traditional recipes. served with a modern twist</p>
            </div>
    </section>
  )
}

export default Testimonials