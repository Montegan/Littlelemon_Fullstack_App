import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { menuContext } from "../../helpers/contexts/Menucontext";

function MenuItems() {
  const navigate = useNavigate();
  const { foodmenu } = useContext(menuContext);

  console.log(foodmenu);
  return (
    <section
      aria-labelledby="SpecialsID"
      id="OrderOnline"
      className="SpecialsSection"
    >
      <div className="SpecialsTitleContainer">
        <h1 id="SpecialsID"> Menu</h1>
      </div>

      
      {foodmenu.length === 0 ? (
        <h1>Loading Data</h1>
      ) : (
        foodmenu[0].meals.map((result) => {
          return (
            <div className="MenuContanier">
              <img
                className="foodImage"
                src={result.strMealThumb}
                alt="banner of little lemon"
              />
              <div className="foodNamePricecontainer">
                <h2 className="foodName">{result.strMeal}</h2>
                <span className="foodPrice">
                  {Math.floor((Math.random() + 1) * 100) / 10} $
                </span>
              </div>
              <p className="foodDescription">Culinary masterpiece crafted by our skilled chefs, bringing
                you the freshest and finest flavors straight from the sea to
                your plate.
              </p>
              <button
                type="button"
                className="orderButton"
                onClick={() => navigate("/Fullmenu")}
              >
                Order a delivery{" "}
              </button>
            </div>
          );
        })
      )}
      <div className='MenuContanier'>
            <img className='foodImage' src={require('../../Assets/greek salad.jpg')}  alt='banner of little lemon'/>
            <div className='foodNamePricecontainer'>
            <h2 className='foodName'>Greek Salad</h2>
            <span className='foodPrice' >$12.99</span>
            </div>
            <p className='foodDescription'>We are a family owned Mediterranean restaurant,
            Focused on traditional recipes served with a modern twist</p>
            <button type='button' className='orderButton' onClick={()=> navigate("/Fullmenu") }>Order a delivery </button>
            </div>
      {/* <div className='MenuContanier'>
            <img className='foodImage' src={require('../../../Assets/lemon dessert.jpg')}  alt='banner of little lemon'/>
            <div className='foodNamePricecontainer'>
            <h2 className='foodName'>Lemon dessert</h2>
            <span className='foodPrice' >$12.99</span>
            </div>
            <p className='foodDescription'>We are a family owned Mediterranean restaurant,
            Focused on traditional recipes served with a modern twist</p>
            <button type='button' className='orderButton' onClick={()=> firstLoad ? navigate("/Register") : navigate("/Fullmenu") }>Order a delivery </button>
            </div>

            <div className='MenuContanier'>
            <img className='foodImage' src={require('../../../Assets/greek salad.jpg')}  alt='banner of little lemon'/>
            <div className='foodNamePricecontainer'>
            <h2 className='foodName'>Greek Salad</h2>
            <span className='foodPrice' >$12.99</span>
            </div>
            <p className='foodDescription'>We are a family owned Mediterranean restaurant,
            Focused on traditional recipes served with a modern twist</p>
            <button type='button' className='orderButton' onClick={()=> firstLoad ? navigate("/Register") : navigate("/Fullmenu") }>Order a delivery </button>
            </div>

            <div className='MenuContanier'>
            <img className='foodImage' src={require('../../../Assets/fddine180706_photos.jpg')}  alt='banner of little lemon'/>
            <div className='foodNamePricecontainer'>
            <h2 className='foodName'>Crab Corn</h2>
            <span className='foodPrice' >$12.99</span>
            </div>
            <p className='foodDescription'>We are a family owned Mediterranean restaurant,
            Focused on traditional recipes served with a modern twist</p>
            <button type='button' className='orderButton' onClick={()=> firstLoad ? navigate("/Register") : navigate("/Fullmenu") }>Order a delivery </button>
            </div> */}
    </section>
  );
}

export default MenuItems;
