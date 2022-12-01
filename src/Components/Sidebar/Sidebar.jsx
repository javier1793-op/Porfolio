import React from "react";
import Logo from "../../Img/main/LOGO.png";
import "./sidebar.scss";
import Info from '../../Img/icons/info22.gif'
import Proyect from '../../Img/icons/proyectos.gif'
import Play from '../../Img/icons/juegos.gif'
import Cv from '../../Img/icons/cv.gif'
import Speak from '../../Img/icons/hablar.gif'

const Sidebar = () => {
  return (
    <>
      <nav>
        <div className="nav-brand">
          <img src={Logo} alt="logotipo" />
          <div className="info">
            <h3>Ruiz Diaz Javier Alejandro</h3>
            <p>front-end Designer</p>
          </div>
        </div>

        <ul className="nav-list-top">
          <li className="nav-item">  
            <img src={Info} alt="info" />
          <spam>A bit of me</spam> 
          </li>
          
          <li className="nav-item">   
            <img src={Proyect} alt="info" />
          <spam>My projects</spam> 
          </li>
          
          <li className="nav-item">   
            <img src={Play} alt="info" />
          <spam>Something funny</spam> 
          </li>
          
          <li className="nav-item">   
            <img src={Cv} alt="info" />
          <spam>CV</spam> 
          </li>
          
          <li className="nav-item">   
            <img src={Speak} alt="info" />
          <spam>Let's talk</spam> 
          </li>
         
        </ul>

        <ul className="nav-list-bottom"></ul>
      </nav>
    </>
  );
};

export default Sidebar;
