import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import web from "../src/images/img1.svg";
import {NavLink} from "react-router-dom";
import Common from './Common';

const Home = () => {
  return(
    <>
    <Common name='Grow Your Business with' 
    imgsrc={web} 
    visit='./service' 
    mname="US"
    btname="Lets Started"/>
    </>
  )
}
export default Home;
