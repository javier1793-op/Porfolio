import React from 'react'
import './../Css/nav.scss'
import './../Css/color-1.scss'

const Nav = () => {
  return (
    <>
        <ul className="nav">
            <li><a href="#" className='active'><i className="fa-solid fa-laptop"></i>Home</a></li>
            <li><a href="#"><i className="fa-solid fa-person-through-window"></i>A bit of me</a></li>
            <li><a href="#"><i className="fa-solid fa-oil-well"></i>My projects</a></li>
            <li><a href="#"><i className="fa-solid fa-shield-dog"></i>Games</a></li>
            <li><a href="#"><i className="fa-solid fa-headset"></i>Contact</a></li>
          </ul>
    </>
  )
}

export default Nav