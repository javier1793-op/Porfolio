import React, { useEffect, useRef } from "react";
import "./../Css/game.scss";
import "./../Css/color-1.scss";
import Start from "./../Img/game/stars.png";
import Moon from "./../Img/game/moon.png";
import MountainsF from "./../Img/game/mountains_front.png";
import MountainsB from "./../Img/game/mountains_behind.png";

const Game = () => {

 const start1= useRef()
 const moon= useRef()
 const mountainsb=useRef()
 

 useEffect(()=>{
 window.addEventListener('scroll',(e)=>{
    let value= window.scrollY;
    start1.current.style.left = value * 0.25 + 'px';
    moon.current.style.top= value * 1.05 + 'px';
    mountainsb.current.style.top = value * 0.5 + 'px'
 })
   
 },[])


  return (
    <div className="game">
      <section className="bg">
        <img src={Start} alt="bg-start" ref={start1} />
        <img src={Moon} alt="bg-moon"  id='moon' ref={moon} />
        <img src={MountainsB} alt="bg-b" ref={mountainsb} />
        
        <button className="play" id="btn">
          Play
        </button>
        <img src={MountainsF} alt="bg-f" id="mountainsf" />
      </section>
      <section className="sec">
        <h2>Select a game</h2>
          <div className="slider-container">
            <div className="slider-content">
              <div className="slider-items">
                <div className="slider-item">
                  <img src="https://picsum.photos/seed/picsum/250/180" alt="img_game_1" />
                </div>
                <div className="slider-item"></div>
                <div className="slider-item"></div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Game;
