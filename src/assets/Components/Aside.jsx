import React, { useState } from 'react'
import './../Css/aside.scss'
import './../Css/color-1.scss'
import Logo from './../Img/LOGO.png'
import Nav from './Nav'
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

const Aside = ({addDark, burger}) => {
  
  const [active, setActive] = useState(false)
    
  

  return (
    <>
     <div className="burger">
     <div className="menutoggle">
      {active?
        <TfiClose className='menuBurger'
        onClick={()=>{
          setActive(!active)
        }}
       />
      :
      <CiMenuBurger className='menuBurger'
          onClick={()=>{
            setActive(!active)
          }}
         />}
         
        </div>
        </div>
        <div className={`aside ${active? 'active':''}`}>
          <div className="logo">
            <img src={Logo} alt="img" />
            <a href="#"><span>K</span>oppo</a>
          </div>
          <div className="nav-toggler">
            <span></span>
          </div>
          <div className='menu-button'>
            <Nav activebuerger={active} setActivebuerger={setActive}/>
            <div className="check">
              <label >
                <input type="checkbox"
                  onChange={addDark}
                />
                <span></span>
                <text>black</text> 
                <text>white</text> 
              </label>
            <span>coffee</span>
            </div>
            
          </div>
        </div>
       
    </>
  )
}

export default Aside