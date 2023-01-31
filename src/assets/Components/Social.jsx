import React from 'react'
import './../Css/social.scss'

const Social = () => {
  return (
    <>  
    <div className="icons">
        <div className="icon">
            <div className="bg"></div>
            <div className="glass">
                <i className="fa-brands fa-github"></i>
            </div>
        </div>
        <div className="icon">
            <div className="bg"></div>
            <div className="glass">
            <i className="fa-solid fa-eye"></i>
            </div>
        </div>
    </div>
    </>
  )
}

export default Social