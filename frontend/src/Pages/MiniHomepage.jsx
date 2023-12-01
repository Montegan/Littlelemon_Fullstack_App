import React from 'react';
import Header from '../Components/Header/Header';
import Main from '../Components/Main/Main';
import Footer from '../Components/Footer/Footer';
function MiniHomepage({randomuser}) {
  return (
    <>
    <Header firstLoad= "firstload" />
    <Main firstLoad= "miniHome" randomuser={randomuser}/>
    <Footer firstLoad="miniHome"/>
    </>
  )
}

export default MiniHomepage