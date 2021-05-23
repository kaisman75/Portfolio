import React from 'react'
import Jump from 'react-reveal/Jump';
import "./NavBar.css"






const NavBar = () => {
  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg  navbar-light ">
      <a className="navbar-brand" href="#">KaisMan</a>
      <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

        <span className="navbar-toggler-icon" ></span>

      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <Jump> <ul className="navbar-nav ml-auto">
          
            <li className="nav-item ">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
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
        </Jump>
      </div>
    </nav>
  </div>
  )
}

export default NavBar


