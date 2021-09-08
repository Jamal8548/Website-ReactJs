import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import web from "../src/images/img2.svg";
import {NavLink} from "react-router-dom";
import Common from './Common';

const About=()=> {
    return(
        <>
        <Common name='Welcome to About page' 
        imgsrc={web} 
        mname=" "
        visit='./contact' 
        btname="Contact now"/>
        </>
    )
}
export default About