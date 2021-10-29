import React from 'react'
import Particles from 'react-particles-js';
import Hero from "../../Components/hero/Hero";
import NavBar from "../../Components/NavBar/NavBar";
import particlesConfig from "../../config/configParticles";
import About from '../about/About';
 const Home = () => {
    return (
        <div style={{ position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute" }}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
         
      </div>
      <NavBar/>
      <Hero/>
      <About/>
        </div>
    )
}

export default Home