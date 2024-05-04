import React from "react";
import axios from "axios";
import { useState } from "react";
import Scrollbutton from '../Components/Scrollbutton';
import "../Css/Booking.css"



const Booking=()=>{

    const handleChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));

    }
    const [inputs, setInputs] =useState({})


    const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
          const { data } = await axios.post('http://localhost:80/api_call/booker/save', inputs);


      
          // Alert the user about successful insertion (assuming data indicates success)
          alert("Booking successful!");
      
          // Redirect to the login page
          window.location.href = "/Dashboard";
        } catch (error) {
          // Handle any errors that occur during the API call
          console.error(error);
          alert("Error While: " + error.message);
        }
      };
    return(
        <>
        <div>
        <div className="Booking-container">
        <form onSubmit={handleSubmit}> 
        <h2>Book Now</h2>
            <div className="overral-divs">
            <div className="div1">
        <div>
                <input  
                type="text"  
                name="PickupLocation"   
                onChange={handleChange}
                placeholder="Write Your Pickup Location" 
                required/>


                <input  
                type="text"  
                name="DeliveryLocation"  
                onChange={handleChange}
                placeholder="Write Your Delivery Location" 
                required/>

            </div>
            <div>
                <input  
                type="date"  
                name="DateforPickup"  
                onChange={handleChange}
                placeholder=" Date and Time for Pickup" 
                required/>
                

            </div>
            <div>
                <select className="select"
                name="PaymentInformation"  
                onChange={handleChange}
                required
                >
                <option value="">Select Your Payment Method</option>
                <option value="Mpesa">Mpesa</option>
                <option value="check">check</option>
                <option value="Cash">Cash</option>

                    </select>  
                

            </div>
            </div>

            <div className="div2">
            <div>
                <select className="select"
                 type="text"  
                 name="TypeofGoods"  
                 onChange={handleChange}
                 required>
                    <option value="">Select The Type Of Goods</option>
                    <option value="Perishable">Perishable</option>
                    <option value="Delicate">Delicate</option>
                    <option value="Hazardous Materials">Hazardous Materials</option>

                </select>

                <input  
                type="mobile"  
                name="Quantity"  
                onChange={handleChange}
                placeholder=" Quantity or Weight In Kg" 
                required/>
            </div>
        
            
            </div>
            </div>
            <a href="<Login/>">
            <div className="div">
                <input type="submit" name="submit" value="Submit"  />

            </div>
            </a>
            
        </form>
        </div>
        <Scrollbutton/>
        </div>
        </>
    )
}
export default Booking;