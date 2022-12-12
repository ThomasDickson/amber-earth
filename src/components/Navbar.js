import React from 'react'
import Logo from '../assets/logo.svg'
import './Navbar.css'

function Navbar() {
  return (
    <div id="navbar">
      <ul id="menu">
        <span className="menuItem">HOME</span>
        <span className="menuItem">SHOP</span>
        <img id="logo" src={Logo} alt="amber earth logo" />
        <span className="menuItem">ABOUT</span>
        <span className="menuItem">CONTACT US</span>  
      </ul>    
    </div>
  )
}

export default Navbar