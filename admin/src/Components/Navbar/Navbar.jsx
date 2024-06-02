import React from "react";
import './Navbar.css'
import navlogo from '../../assets/nav-logo2.png'
import navprofile from '../../assets/nav-profile2.png'
import arrowicon from '../../assets/arrow_icon3.png'

const Navbar = () =>{
    return (
        <div className="navbar">
            <img className="nav-logo" src={navlogo} alt="" />
            
            <div className="navbar-profile">
                <img className="nav-profile" src={navprofile} alt="" />
                <img className="arrowicon" src={arrowicon} alt="" />
            </div>
        </div>
    )
}

export default Navbar