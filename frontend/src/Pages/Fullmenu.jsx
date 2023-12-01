import React, { useContext, useEffect } from 'react'
import MenuItems from '../Components/FullmenuItems/MenuItems'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { MenuContextProvider } from '../helpers/contexts/Menucontext'


function Fullmenu() {

  return (
    <MenuContextProvider>
      <Header/>
      <MenuItems/>
      <Footer/>
    </MenuContextProvider>
  )
}

export default Fullmenu