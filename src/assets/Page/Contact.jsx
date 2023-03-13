import React from "react";
import "../Css/contact.scss";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="contact section">
        <div className="container ">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact</h2>
            </div>
            <div className="container-box">
              <div className="box" style={{ color:'#89ec5b' }}>
                <div className="content-box">
                  <div className="icon">
                    <i class="fa-brands fa-whatsapp icon-size"></i>
                  </div>
                  <div className="text">
                    <h3>Whatsapp</h3>
                    <a href="https://wa.me/5493704264610" target="_blank">
                    send Message
                    </a>
                  </div>
                </div>
              </div>
              <div className="box" style={{ color:'#cb4335' }}>
                <div className="content-box">
                  <div className="icon">
                    <SiGmail className="icon-size"/>
                  </div>
                  <div className="text">
                    <h3>Gmail</h3>
                    <a href="mailto:javier17utn@gmail.com" className="gmail">send Message</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
