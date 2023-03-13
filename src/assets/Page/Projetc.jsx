import React from "react";
import Card from "../Components/Card";
import "./../Css/project.scss";
import Foto from "./../Img/perfil-miniatura.jpg";

const Projetc = () => {
  return (
    <>
      <div className="project section">
        <div className="container ">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Projects</h2>
              <div className="gallery">
                <div className="project-img">
                  <img src={Foto} alt="" />
                  <div className="detall">
                    <button>
                      <i class="fa-brands fa-github"></i>Code
                    </button>
                    <button>
                      <i class="fa-solid fa-laptop"></i>Page
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="section-title padd-15">
              <h2>Challenges</h2>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="row">
            <div className="section-title padd-15">
              <h2>Components</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projetc;
