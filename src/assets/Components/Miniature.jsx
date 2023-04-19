import React from 'react'
import '../Css/miniature.scss'
import Foto from "./../Img/perfil-miniatura.jpeg";

const Miniature = ({git, page, img}) => {
  return (
    <div className="project-img">
    <img src={img} alt="miniatura" className='portada'/>
    <div className="detall">
      <button>
        <a href={git} target="_blank"><i class="fa-brands fa-github"></i>Code</a>
      </button>
      <button>
        <a href={page} target="_blank">  <i class="fa-solid fa-laptop"></i>Page</a>
      </button>
    </div>
  </div>
  )
}

export default Miniature