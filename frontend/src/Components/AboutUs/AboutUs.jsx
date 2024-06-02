import React from "react";
import './AboutUs.css'
import aboutus_banner from '../Assets/aboutus_banner.jpg'
// import aboutus_vclip from '../Assets/aboutvclip.mp4'

const AboutUs = () =>{

    return (
    
        <div className="aboutus">
            <img className="aboutus-banner" src={aboutus_banner} alt="" />
            <h1>About Us</h1>
            <hr />

            <p>Nestled in the heart of a bustling cityscape, The Velvet Box exudes an aura of timeless elegance and refined luxury. 
                Stepping through its ornate entrance, visitors are enveloped in an ambiance of sophistication, 
                where every facet gleams with opulence. 
                Within its walls, a treasure trove of exquisite jewellery awaits, curated with impeccable taste and unparalleled craftsmanship. 
                From dazzling diamond necklaces to intricate gold bangles, each piece tells a story of unparalleled beauty and allure. 
                The store's collection showcases a fusion of classic designs and contemporary flair, catering to the diverse tastes of discerning clientele.
                The attentive staff, clad in impeccable attire, offer personalized service, guiding patrons through the array of treasures with expertise and grace. 
                Whether seeking the perfect engagement ring or a statement piece for a special occasion, 
                every visitor is treated with utmost care and attention.
                The Velvet Box is more than just a jewellery store; it's a destination where dreams are realized and memories are made. 
                Its allure extends beyond mere adornments, embodying the essence of luxury and refinement. For those who seek elegance beyond compare, 
                The Velvet Box stands as a beacon of indulgence in a world of timeless beauty.</p>
                {/* <video src={aboutus_vclip} type="video/mp4" autoPlay muted loop></video> */}

            </div>
    )
}

export default AboutUs