import React from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div id="navbar">
      <ul id="menu">
        <Link to="/">
          <img id="logo" src={Logo} alt="amber earth logo" />
        </Link>
        <Link className="menuItem" to="/shop">SHOP</Link>
        <Link className="menuItem" to="/about">ABOUT</Link>
        <Link className="menuItem" to="/contact">CONTACT US</Link>  
      </ul>    
    </div>
  )
}

export default Navbar