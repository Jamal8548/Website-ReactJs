import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';


const Card = (props) => {
  return(
    <>
   

                   <div className="col-md-4 col-10 mx-auto">
                   <div className="card">
                   <img className="card-img-top" src={props.imgSrc} alt={props.imgsrc}/>
                   <div className="card-body">
                   <h5 className="card-title font-weight-bold">{props.title}</h5>
                   <p className="card-text">{props.text}</p>
                   <NavLink to="/" className="btn btn-primary">{props.btname}</NavLink>
                   </div>
                   </div>

                   </div>
   
    </>
  )
}
export default Card;
