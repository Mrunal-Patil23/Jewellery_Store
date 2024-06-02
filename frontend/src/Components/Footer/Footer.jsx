import React from "react";
import './Footer.css'
import footer_logo from '../Assets/nav-logo2.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
            </div>
            <ul className="footer-links">
                <li><Link to={'/'} style={{textDecoration: 'none', color:"#252525"}}>Company</Link></li>
                <li><Link to={'/women'} style={{textDecoration: 'none', color:"#252525"}}>Products</Link></li>
                {/* <li>Offices</li> */}
                <li><Link to={'/aboutus'} style={{textDecoration: 'none', color:"#252525"}}>AboutUs</Link></li>
                {/* <li>Contact</li> */}
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <Link to={"https://www.instagram.com/"}><img src={instagram_icon} alt="" /></Link>
                </div>
                <div className="footer-icons-container">
                    <Link to={"https://www.pinterest.com.au/ideas/"}><img src={pintester_icon} alt="" /></Link>
                </div>
                <div className="footer-icons-container">
                    <Link to={"https://www.whatsapp.com/"}><img src={whatsapp_icon} alt="" /></Link>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @2024 - All Right Reserved. MrunalPatil</p>
            </div>
        </div>
    )
}

export default Footer