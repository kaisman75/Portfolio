import React from 'react'
import "./Hero.css"
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import Dev from './web_dev2.png';
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
                    
                </div>
                <img src={Dev} className='hero-Img' />
            </div>
           
        </>
    )
}
export default Hero