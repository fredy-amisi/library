 import React from "react";
import { useState } from "react";
import axios from "axios";
import Scrollbutton from "../Components/Scrollbutton";
import "../Css/signup.css";

const Signup=()=>{

    const handleChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));

    }
    const [inputs, setInputs] =useState({})

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
          const { data } = await axios.post('http://localhost:80/api/user/save', inputs);
      
          // Alert the user about successful insertion (assuming data indicates success)
          alert("Record created successfully!");
      
          // Redirect to the login page
          window.location.href = "/Login";
        } catch (error) {
          // Handle any errors that occur during the API call
          console.error(error);
          alert("Error creating record: " + error.message);
        }
      };
      
    
    return(
        <div>
        <div className="signin-container">
        <form onSubmit={handleSubmit}> 
        <h2>Create account</h2>
            <div className="overral-divs">
            <div className="div1">
        <div>
                <input  type="text"  name="name"   onChange={handleChange}
                placeholder="Your Name" required/>
                <input  type="email"  name="email"  onChange={handleChange}
                placeholder="Your Email" required/>
            </div>
            <div>
                <input  type="text"  name="username"  onChange={handleChange}
                placeholder=" Your username" required/>
                

            </div>
            </div>
            <div className="div2">
            <div>
                <select className="select"
                name="department"  
                onChange={handleChange}
                required>
                    <option value="">Select Your Department</option>
                    <option value="User">User</option>
                    <option value="Manager">Manager</option>
                    <option value="Repairs">Repairs</option>
                    <option value="Human Resource">Human Resource</option>
                    <option value="IT">IT</option>

                </select>


                <input  type="tel"  name="phonenumber"  onChange={handleChange}
                 placeholder=" your phone Number" required/>
            </div>
        
            <div>
                <input  type="password"  name="password" minLength={8} onChange={handleChange}
                 placeholder=" Your Password" required/>
            </div>
            </div>
            </div>
            <a href="<Login/>">
            <div className="div">
                <input type="submit" name="submit" value="Register"  />

            </div>
            </a>
            <div className="div-p">
            <p>Alredy have an account? <a href="/Login"><span>Log In</span></a> </p>
            </div>
        </form>
        </div>
        <Scrollbutton/>
        </div>
    )
}
export default Signup;