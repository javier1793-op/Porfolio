import React, { useState } from 'react'
import './../Css/nav.scss'
import './../Css/color-1.scss'
import { WavyLink } from 'react-wavy-transitions'
import { Link } from 'react-router-dom'

const Nav = () => {

  const [active, setActive]= useState(false)


  return (
    <>
        <ul className="nav">
            <li><Link to='/home' 
            className='active'
  
            ><i className="fa-solid fa-laptop"></i>
              Home
            </Link></li>
            <li><Link to='/about'><i className="fa-solid fa-person-through-window"></i>
              A bit of me
            </Link></li>
            <li><Link to='/project'><i className="fa-solid fa-oil-well"></i>My projects</Link></li>
            <li><Link to='/game'><i className="fa-solid fa-shield-dog"></i>Games</Link></li>
            <li><Link to='/contact'><i className="fa-solid fa-headset"></i>Contact</Link></li>
          </ul>
    </>
  )
}

export default Nav