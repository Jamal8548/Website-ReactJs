import React from 'react';
import logo from './logo.svg';
import './App.css';
import web from "../src/images/s1.jpg"
import Card from './Card';
import Sdata from './Sdata';

const Service = () => {
  return(
    <>
   <div className="my-5">
       <h1 className="text-center">Our Services</h1>
   </div>
   <div className="container-fluid mb-5">
       <div className="row">
           <div className="col-10 mx-auto">
               <div className="row gy-4">
                
                 {   Sdata.map((val,ind)=> {
                        return (<Card
                        key={ind}
                        imgSrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        btname={val.btname}/>
                   )})}
                    
                
               </div>
           </div>
       </div>

   </div>
    </>
  )
}
export default Service;



