import React from 'react'
import './../Css/aside.scss'
import './../Css/color-1.scss'
import Logo from './../Img/LOGO.png'
import Nav from './Nav'
import './../Css/media.scss'

const Aside = () => {
  return (
    <>
        <div className="aside">
          <div className="logo">
            <img src={Logo} alt="img" />
            <a href="#"><span>K</span>oppo</a>
          </div>
          <div className="nav-toggler">
            <span></span>
          </div>
            <Nav/>
        </div>
    </>
  )
}

export default Aside