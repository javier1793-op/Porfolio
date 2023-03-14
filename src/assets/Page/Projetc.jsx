import React from "react";
import Card from "../Components/Card";
import Miniature from "../Components/Miniature";
import "./../Css/project.scss";
import Loading from '../Img/project/Component/loading-sr.png'


const Projetc = () => {
  return (
    <>
      <div className="project section">
        <div className="container ">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Projects</h2>
              <div className="gallery">
              
              </div>
            </div>
          </div>

          <div className="row">
            <div className="section-title padd-15">
              <h2>Challenges</h2>
              <div className="gallery">
               
              </div>
            </div>
          </div>
          <div className="row">
            <div className="section-title padd-15">
              <h2>Components</h2>
              <div className="gallery">
                <Miniature git='https://github.com/javier1793-op/Loading.git' page='https://javier1793-op.github.io/Loading/' img={Loading}/>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projetc;
