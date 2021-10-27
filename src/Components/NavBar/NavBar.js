import React from 'react'
import Jump from 'react-reveal/Jump';
import "./NavBar.css"






const NavBar = () => {
  return (
    <div className="container">
      <Jump>
    <nav className="navbar navbar-expand-lg  navbar-light ">
      <a className="navbar-brand" href="#">KaisMan</a>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          
            <li className="nav-item ">
            <a className="nav-link" href="#">Home </a>
            </li>
          
          
            <li className="nav-item">
            <a className="nav-link" href="#">About me</a>
            </li>
      
          
            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a>
            </li>
      
      
            <li className="nav-item">
              <a className="nav-link " href="#">Contact me</a>
            </li>
          
        </ul>
        
      </div>
    </nav>
    </Jump>
  </div>
  )
}

export default NavBar


