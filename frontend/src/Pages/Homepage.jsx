import React,{useEffect,useState} from 'react';
import axios from "axios";
import Header from '../Components/Header/Header';
import Main from '../Components/Main/Main';
import Footer from '../Components/Footer/Footer';

function Homepage ({randomuser}) {
  
  return (
    <>
    <Header/>
    <Main randomuser={randomuser}/>
    <Footer/>
    </>
  )
}

export default Homepage