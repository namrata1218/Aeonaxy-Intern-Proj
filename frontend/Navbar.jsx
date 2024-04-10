import React from 'react'
import logo from './images/Dribbble New 2023.png'
import Verification from './Verification'

const Navbar = () => {
  return (
    <div>
      <div className="conatiner navbar">
        
        <div className="container-navbar">
        <div className="logoli">
      <div className="logoimage">
        <img src={logo} alt="" />
      </div>
        <div className="navbar-content">
            <ul>
                <li><a href="">Inspiration</a></li>
                <li><a href="">Find Work</a></li>
                <li><a href="">Learn Design</a></li>
                <li><a href="">Go Pro</a></li>
                <li><a href="">Hire Designer</a></li>
            </ul>
        </div>
        </div>
        <div className="search-bar">
        
        <input type="text" placeholder="🔍 Search..." />
        <button id='upbtn'>Upload</button>
      </div>
      </div>
      
    </div>
    </div>
  )
}

export default Navbar
