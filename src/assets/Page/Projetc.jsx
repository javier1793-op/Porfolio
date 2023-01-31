import React from 'react'
import Card from '../Components/Card'
import './../Css/project.scss'


const Projetc = () => {




  return (
    <>
          <div className="about section">
            <div className="container ">
              <div className="row">
                <div className="section-title padd-15">
                  <h2>Projects</h2>
                </div>
              </div>
              <div className="row padd-15">
                <div className="content-project">
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                </div>
                  
              </div>
            </div>
        </div>
    </>
  )
}

export default Projetc