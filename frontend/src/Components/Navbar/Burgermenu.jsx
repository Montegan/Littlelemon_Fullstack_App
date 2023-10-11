import React, { useState } from "react";
import { Link } from "react-router-dom";
function Burgermenu() {
  const [burgerState, setburgerState] = useState(false);
  const burgerClick = () => {
    setburgerState(!burgerState);
  };

  return (
    <>
      {burgerState ?  (
        <ul className="Burger-items-wraper">
          <button className="burgerButton" onClick={burgerClick}>
            <img className="deleteImage" src={require("../../Assets/delete.png")} alt="delete Button" />
          </button>
        <li className="Burger-Item"><Link to='/' className="Burger-Itemlink">Home</Link></li>
        <li className="Burger-Item"><Link to='/Fullmenu' >Menu</Link></li>
        <li className="Burger-Item"><Link to='/ContactUs' >ContactUs</Link></li>
        <li className="Burger-Item"><Link to='/Reservetable' >Reservations</Link> </li>
        <li className="Burger-Item"><Link to='/AboutUs'>Aboutus</Link>  </li>
        <li className="Burger-Item"><Link to='/Register'>Login/sinup</Link>  </li>
        </ul>
      ):(
        <button className="burgerButton" onClick={burgerClick}>
          <img className="burgerbImage"  src={require('../../Assets/menu-burger.png')} alt="burger icon"  />
        </button>
      ) }
    </>
  );
}

export default Burgermenu;
