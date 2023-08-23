import React from "react";
import Card from "../Components/Card";
import Miniature from "../Components/Miniature";
import "./../Css/project.scss";
import Loading from '../Img/project/Component/loading-sr.png'
import Gallery from '../Img/project/Component/gallerysr.png'
import CardPerfil from '../Img/project/Component/cardPerfilsr.png'
import Qr from '../Img/project/Challenger/qrsr.png'
import HomePage from '../Img/project/Challenger/homepage.png'
import Summary from '../Img/project/Challenger/summary.png'
import Things from '../Img/project/project/things.png'
import weather from '../Img/project/project/weather.png'
import Anime from '../Img/project/project/Anime.png'
import Serendipia from '../Img/project/project/serendipia.png'

const Projetc = () => {
  return (
    <>
      <div className="project section">
        <div className="container ">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Projects</h2>
              <div className="gallery">
              <Miniature git='https://github.com/javier1793-op/diaryPersonal.git' page='https://javier1793-op.github.io/diaryPersonal/' img={Serendipia}/>
              <Miniature git='https://github.com/javier1793-op/anime.git' page='https://javier1793-op.github.io/anime/' img={Anime}/>
              <Miniature git='https://github.com/javier1793-op/things.git' page='https://javier1793-op.github.io/things/' img={Things}/>
              <Miniature git='https://github.com/javier1793-op/weather.git' page='https://javier1793-op.github.io/weather/' img={weather}/>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="section-title padd-15">
              <h2>Challenges</h2>
              <div className="gallery">
                <Miniature git='https://github.com/javier1793-op/Component-qr' page='https://javier1793-op.github.io/Component-qr/' img={Qr}/>
                <Miniature git='https://github.com/javier1793-op/news-homepage.git' page='https://javier1793-op.github.io/news-homepage/' img={HomePage}/>
                <Miniature git='https://github.com/javier1793-op/results-summary-component.git' page='https://javier1793-op.github.io/results-summary-component/' img={Summary}/> 
              </div>
            </div>
          </div>
          <div className="row">
            <div className="section-title padd-15">
              <h2>Components</h2>
              <div className="gallery">
                <Miniature git='https://github.com/javier1793-op/Loading.git' page='https://javier1793-op.github.io/Loading/' img={Loading}/>
                <Miniature git='https://github.com/javier1793-op/GalleryImg.git' page='https://javier1793-op.github.io/GalleryImg//' img={Gallery}/>
                <Miniature git='https://github.com/javier1793-op/Card-perfil.git' page='https://javier1793-op.github.io/Card-perfil/' img={CardPerfil}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projetc;
