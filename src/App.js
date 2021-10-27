import React from "react";
import Particles from 'react-particles-js';
import Hero from "./Components/hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import particlesConfig from "./config/configParticles";

function App() {
  return (
    <div className="App" style={{ position: "relative", overflow: "hidden" }}>
     
      <div style={{ position: "absolute" }}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
         
      </div>
      <NavBar/>
      <Hero/>
     
    </div>
  );
}
export default App;
