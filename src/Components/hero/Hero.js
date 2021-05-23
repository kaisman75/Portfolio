import React from 'react'
import "./Hero.css"
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';

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
            </div>
        </>
    )
}
export default Hero