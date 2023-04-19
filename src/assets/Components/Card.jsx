import React from 'react'
import './../Css/card.scss'
import Foto from './../Img/perfil-miniatura.jpeg'

const Card = () => {
  return (
    <>
      <>
          <div className="about section">
            <div className="container ">
              <div className="row">
               <div className="gallery">
                <div className="project-img">
                  <img src={Foto} alt="" />
                </div>
               </div>
              </div>
            </div>
        </div>
    </>
    </>
  )
}

export default Card