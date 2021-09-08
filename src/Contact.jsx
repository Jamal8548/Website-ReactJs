import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { data, event } from 'jquery';

const Contact = () => {
const[data,setData]= useState({
  fullname:"",
  phonenumber:"",
  email:"",
  message:""
});

const InputEvent=(event)=>{
    const {name, value}=event.target;

    setData((preVal)=> {
        return {
            ...preVal, 
            [name]: value,
        };
    });
};
    const formSubmit=(e) =>{
        e.preventDefault();
        alert(`My name is ${data.fullname} My mobile number is  ${data.phonenumber} My Email is ${data.email} My message is ${data.message}`)

    }
  return(
    <>
   <div className="my-5">
       <h1 className="text-center">Contact Us </h1>

   </div>
   <div className="container contact_div">
       <div className="row">
           <div className="col-md-6 col-10 mx-auto"></div>
           <form onSubmit={formSubmit}>
           
  <div className="form-group">
    <label for="exampleFormControlInput1">Enter your full name</label>
    <input type="text" 
    className="form-control" 
    id="exampleFormControlInput1" 
    name="fullname"
    value={data.fullname}
    onChange={InputEvent}
    placeholder="Full name"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Enter your email</label>
    <input type="Email" 
    className="form-control" 
    id="exampleFormControlInput1" 
    name="email"
    value={data.email}
    onChange={InputEvent}
    placeholder="Email Please"/>
  </div><div className="form-group">
    <label for="exampleFormControlInput1">Enter your phone number</label>
    <input type="number" 
    className="form-control" 
    id="exampleFormControlInput1" 
    name="phonenumber"
    value={data.phonenumber}
    onChange={InputEvent}
    placeholder="Phone Number"/>
   </div>
  
   <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control"
     id="exampleFormControlTextarea1" 
     rows="3"
     name="message"
     value={data.message}
     onChange={InputEvent}>
         
     </textarea>
   </div>
   <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</form>
           
           
       </div>

   </div>
   </>
  )
}
export default Contact;




   