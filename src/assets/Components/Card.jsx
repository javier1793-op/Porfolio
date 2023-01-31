import React from 'react'
import './../Css/card.scss'
import Social from './Social'

const Card = () => {
  return (
    <>
    <div className="container-cards">
        <div className="card">
            <div className="imgBox">
                <img src="https://placeimg.com/300/300/tech" alt="proyecto1" />
            </div>
            <div className="content-card">
                <h3>Project 1 name</h3>
                    <Social/>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Card