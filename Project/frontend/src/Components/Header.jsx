import React from 'react'
import './Styles/header.css'

const Header = () => {
  return (
    
    <>
        <div className="header sticky">
          
          <div className="logo header-box"> <a className='header-logo' href="">mohdnneloy</a></div>

          <ul className='nav-bar'>
            <li><a className='nav-list-item' href="#main">Home</a></li>
            <li><a className='nav-list-item' href="#about-me">About</a></li>
            <li><a className='nav-list-item' href="#experience">Experience</a></li>
            <li><a className='nav-list-item' href="#skills">Skills</a></li>
            <li><a className='nav-list-item' href="#education">Education</a></li>
            <li><a className='nav-list-item' href="#projects">Projects</a></li>
            <li><a className='nav-list-item' href="#contact">Contact</a></li>
          </ul>

        </div>

        
    </>
  )
}

export default Header