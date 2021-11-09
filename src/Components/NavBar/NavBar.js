import React from 'react'
import Jump from 'react-reveal/Jump';
import "./NavBar.css"
import { Link } from "react-router-dom";






const NavBar = () => {
  return (
    <div className="container">
      <Jump>
    <nav className="navbar navbar-expand-lg  navbar-light ">
      <Link to="/" className="navbar-brand">
      <a>KaisMan</a>
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          
            <li className="nav-item ">
            <Link to="/" className="nav-link"> 
            <a >Home </a>
            </Link>
          
          
          <Link to="/About" className="nav-link">
            <a> About me </a>
          </Link>
      
          
          <Link to="/portfolio" className="nav-link">
              <a >Portfolio</a>
              </Link>
      
      
              <Link to="/contact" className="nav-link">
              <a >Contact me</a>
              </Link>
            </li>
          
        </ul>
        
      </div>
    </nav>
    </Jump>
  </div>
  )
}

export default NavBar


