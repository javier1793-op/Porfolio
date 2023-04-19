import React, { useEffect, useRef } from 'react'
import './../Css/home.scss'
import Perfil from '../Img/perfil.jpeg';
import Typed from "typed.js";
import { Link } from 'react-router-dom';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["web programmer"], 
      endDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
    <section className="home section">
           
            <div className="container">
              
              <div className="row">
                <div className="home-info padd-15">
                  <h3 className="hello">Hello, my name is <span className="name">Ruíz Díaz Javier</span></h3>
                  <h3 className="my-profession">I´ m a <span ref={el}></span></h3>
                  <p>Studying system engineering - junior frontend programmer - Systems Analyst.</p>
                  
                    <div className="button padd-15">
                    <Link to='/about'className='a'>
                      <span>More About Me</span><i></i>
                      </Link> 
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