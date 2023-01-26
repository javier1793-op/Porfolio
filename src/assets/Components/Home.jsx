import React from 'react'
import './../Css/home.scss'
import Perfil from "./../Img/perfil.jpg";

const Home = () => {
  return (
    <>
    <section className="home section">
            <div className="container">
              <div className="row">
                <div className="home-info padd-15">
                  <h3 className="hello">Hello, my name is <span className="name">Ruíz Díaz Javier</span></h3>
                  <h3 className="my-profession">I´ m a <span>web programmer</span></h3>
                  <p>Studying system engineering - junior frontend programmer - Systems Analyst.</p>
                  
                    <div className="button padd-15">
                        <a href="#" ><span>More About Me</span><i></i></a>
                    </div>
                </div>
                <div className="home-img padd-15">
                  
                  <div className="borde">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <img src={Perfil} alt="perfil" />
                  </div>
                  
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default Home