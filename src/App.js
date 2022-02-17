import React from "react";
import "./App.css";
import Hero from './pages/hero/Hero'
import NavBar from "./Components/NavBar/NavBar";
import About from "./pages/about/About";
import ContactUs from "./pages/contact/ContactPage"
import Footer from "./Components/footer";
import Portfolio from "./pages/portfolio/portfolio";
function App() {
  return (
    <div className="App">
      
     
      
    <NavBar />
    <Hero/>
    <About/>
    <Portfolio/>
    <ContactUs/>
    <Footer/>   
    
      

  
    </div>
  );
}
export default App;
