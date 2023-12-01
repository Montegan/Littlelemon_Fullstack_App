import React from 'react'
import './testimonials.css'
function Testimonials({randomuser}) {

  const hola= (randomuser.map((user)=>{return(<div key={user.id.value} className='TestimonialsItemContanier'>
            <img className='customerImg'  src= {user.picture.large} alt='hello '/>
            <div className='customerNameRating'>
            <h2 className='cutomerName'>{user.name.first}</h2>
            <span className='customerRating' >⭐⭐⭐⭐⭐</span>
            </div>
            <p className='customerDescription' >We are a family owned Mediterranean restaurant, Focused on traditional recipes. served with a modern twist. owned Mediterranean restaurant, Focused on traditional recipes. served with a modern twist</p>
            </div>)
    }))
  console.log(hola)
  return (
    <section aria-labelledby='testimonialsID' id='testimonialsid' className='testimonialsSection'>

           <div className='TestimonialsTitleContainer'>
            <h1 id="testimonialsID"> Testimonials</h1>
            </div>
{hola}
    </section>
  )
}

export default Testimonials