import React, { useEffect, useState } from 'react'
import './../Css/nav.scss'
import './../Css/color-1.scss'
import { WavyLink } from 'react-wavy-transitions'
import { Link } from 'react-router-dom'

const Nav = ({activebuerger, setActivebuerger}) => {

  const [active, setActive]= useState('')




const handleClick=(focus)=>{
  setActivebuerger(!activebuerger)
  setActive(focus)
}
console.log(active)
  return (
    <>
        <ul className="nav">
            <li
              onClick={()=>{handleClick('home')}}
            ><Link to='/Porfolio/' 
            className={`${active === 'home'?'active':''}`}
  
            ><i className="fa-solid fa-laptop"></i>
              Home
            </Link></li>
            <li
                 onClick={()=>{handleClick('about')}}
              ><Link to='Porfolio/about'
              className={`${active === 'about'?'active':''}`}
              ><i className="fa-solid fa-person-through-window"></i>
              A bit of me
            </Link></li>
            <li
                onClick={()=>{handleClick('projects')}}
              ><Link to='Porfolio/project'
              className={`${active === 'projects'?'active':''}`}
              ><i className="fa-solid fa-oil-well"></i>My projects</Link></li>
            <li
                 onClick={()=>{handleClick('games')}}
              ><Link to='Porfolio/game'
              className={`${active === 'games'?'active':''}`}
              ><i className="fa-solid fa-shield-dog"></i>Games</Link></li>
            <li
                 onClick={()=>{handleClick('contact')}}
              ><Link to='Porfolio/contact'
              className={`${active === 'contact'?'active':''}`}
              ><i className="fa-solid fa-headset"></i>Contact</Link></li>
          </ul>
    </>
  )
}

export default Nav