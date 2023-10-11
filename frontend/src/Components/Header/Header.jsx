import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import Burgermenu from "../Navbar/Burgermenu";

function Header() {
  const useWindowWide = (size) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [setWidth]);

    return width < size;
  };

  //console.log(useWindowWide(800))
  // if(useWindowWide(800)){
  // console.log("screen size is detected")
  // }
  const screenSize = useWindowWide(800);
  return (
    <header className="Headercontainer">
      <img
        className="LogoImage"
        src={require("../../Assets/Logo.png")}
        height="50px"
        width="150px"
        alt=" Little Lemon Logo "
      />
      <nav>{screenSize ? <Burgermenu /> : <Navbar></Navbar>}</nav>
    </header>
  );
}

export default Header;
