import React from 'react'
import Perfilminiatura from './../Img/perfil-miniatura.jpg'
import './../Css/about.scss'

const About = () => {
  return (
    <>
         <div className="about section">
            <div className="container ">
              <div className="row">
                <div className="section-title padd-15">
                  <h2>About Me</h2>
                </div>
              </div>
              <div className="row">
                <div className="about-content padd-15">
                  <div className="row">
                    <div className="about-text padd-15">
                      <h3>I´m Ruíz Díaz Javier <span>web developer</span></h3>
                      <p>I consider myself a responsible, dynamic and above all creative person with ease of adaptation and ability to work as a team. One of my objectives is to put into practice all my knowledge acquired during my professional training to provide the best solutions to the activities assigned to me. My aspiration at a professional level is to fully develop myself in the assigned tasks, continuing with my professional development as a future Systems Engineer and learning new tools to stay at the forefront of web development tools on the market.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="personal-info padd-15">
                      <div className="row">
                        <div className="info-it padd-15">
                          <p>Email : <span>javier17utn@gmail.com</span></p>
                        </div>
                        <div className="info-it padd-15">
                          <p>Phone : <span>+54 3704264610</span></p>
                        </div>
                        <div className="info-it padd-15">
                          <p>City : <span>Resistencia - Chaco - Argentina</span></p>
                        </div>
                        <div className="info-it padd-15">
                          <p>Qualification : <span>system analyst</span></p>
                        </div>
                        <div className="info-it padd-15">
                          <p>Studying : <span>Systems Engineering</span></p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="button padd-15">
                          <a href="#" ><span>Download CV</span><i></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="photo padd-15" >
                      <div className="row">
                        <div className="card padd-15">
                          <div className="lines"></div>
                          <div className="imgbox">
                            <img src={Perfilminiatura} alt="foto-miniatura" />
                          </div>
                          <div className="content">
                            <div className="details">
                              <h2>Javier Alejandro <br /> <span>junior web developer</span></h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                  <div className="title-skill padd-15">
                        <h3>Skill</h3>
                      </div>
                  </div>
                  <div className="row">
                    <div className="about-skill padd-15">
                       <ul>
                        <li>
                          <a href="#"><i className="fa-brands fa-react"></i></a>
                        </li>
                        <li className='java'>
                          <a href="#"><i className="fa-brands fa-js"></i></a>
                        </li>
                        <li className='html'>
                          <a href="#"><i className="fa-brands fa-html5"></i></a>
                        </li>
                        <li>
                          <a href="#"><i className="fa-brands fa-css3-alt"></i></a>
                        </li>
                        <li>
                          <a href="#"><i className="fa-brands fa-wordpress"></i></a>
                        </li>
                        <li className='php'>
                          <a href="#"><i className="fa-brands fa-php"></i></a>
                        </li>
                       </ul>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default About