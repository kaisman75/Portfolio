import React from "react";
import "./App.css";
import Home from './pages/home/home'
import NavBar from "./Components/NavBar/NavBar";
import About from "./pages/about/About";
import ContactUs from "./pages/contact/ContactPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/About" element={ <About/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
    </div>
  );
}
export default App;
