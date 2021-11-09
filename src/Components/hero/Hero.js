import React from 'react'
import "./Hero.css"
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import SocialMedia from "../socialMedia/SocialMedia";
import { Fade } from "react-reveal";
//page de presentation

const Hero = () => {
    return (
        <>
            <div className="heroPage">
                <div className="hero-name">
                    <Bounce >
                        <h1>Manai Kais</h1>
                    </Bounce>

                    <Flip>
                        <p>Web Devlopper</p>
                    </Flip>
                   <SocialMedia/> 
                </div>
                <Fade right duration={3000} distance="80px">
                <img src="/images/web_dev2.png" className='hero-Img' />
               </Fade>
            </div>
           
        </>
    )
}
export default Hero