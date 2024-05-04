import React from "react";
import Scrollbutton from '../Components/Scrollbutton';
import "../Css/Dashboard.css"
import l7 from "../Images/l7.jpg"
import l10 from "../Images/l10.jpg";
import l11 from "../Images/l11.jpg";
import l12 from "../Images/l12.jpg"
import l13 from "../Images/l13.jpg"
import l14 from "../Images/l14.jpg"
import l15 from "../Images/l15.jpg"
import l16 from "../Images/l16.jpg"
import l18 from "../Images/l18.jpg"
import {Link} from "react-router-dom";



const Dashboard=()=>{
   // Get the username from the URL query string
   const searchParams = new URLSearchParams(window.location.search);
   const username = searchParams.get('username');

    return(
        <div>
            <div className="dashboard-section">
                <div className="vertical-dashboard">
                </div>
                <h1>BOOK OUR <span>PREMIUM</span> SERVICES</h1>
                <div className="d-profile">
                    {/* Display the dynamic username */}
                    <h2>Welcome {username}</h2>
                </div>
                <div className="dashboard-container">
                    <div className="dashboard">
                       <Link to="/Booking"><img className="dt" src={l10} alt="l10" /></Link>
                        
                    </div>
                    <div className="dashboard">
                     <Link to="/Booking">
                    <img className="dt" src={l11} alt="l11" />
                    </Link>
                        
                    </div>
                    <div className="dashboard">
                    <Link to="/Booking">
                       <img className="dt" src={l12} alt="l12" />
                    </Link>
                        
                    </div>
                    <div className="dashboard">
                       <img className="dt" src={l13} alt="l13" />
                        
                    </div>
                    <div className="dashboard">
                    <Link to="/Booking">
                       <img className="dt" src={l14} alt="l14" />
                    </Link>
                        
                    </div>
                    <div className="dashboard">
                    <Link to="/Booking">
                       <img className="dt" src={l15} alt="l15" />
                    </Link>
                        
                    </div>
                    <div className="dashboard">
                    <Link to="/Booking">
                       <img className="dt" src={l16} alt="l16" />
                    </Link>
                        
                    </div>
                    <div className="dashboard">
                    <Link to="/Booking">
                       <img className="dt" src={l18} alt="l18" />
                    </Link>
                        
                    </div>
                    <div className="dashboard">
                    <Link to="/Booking">
                       <img className="dt" src={l7} alt="l7" />
                    </Link>
                        
                    </div>
                </div>
            </div>
            <Scrollbutton/>
        </div>
    )
}

export default Dashboard;