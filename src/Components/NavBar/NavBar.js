import React from 'react'
import Jump from 'react-reveal/Jump';
import "./NavBar.css"







const NavBar = () => {
  return (
    <div className="Nav">
      <Jump>
    <nav className="navbar navbar-expand-lg  navbar-light ">
      
      <a href='#home'>KaisMan</a>
   
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          
            <li className="nav-item ">
            <a href='#hero'>Home </a>
            </li>
          
          
          
            <li className="nav-item ">
            <a href="#About"> About me </a>
            </li>
      
          
            <li className="nav-item ">
              <a href="#portfolio">Portfolio</a>
              </li>
      
      
              <li  className="nav-item ">
              <a href="#contact">Contact me</a>
            
            </li>
          
        </ul>
        
      </div>
    </nav>
    </Jump>
  </div>
  )
}

export default NavBar


