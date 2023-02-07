import React, { useEffect, useRef } from "react";
import "./../Css/game.scss";
import "./../Css/color-1.scss";
import Start from "./../Img/game/stars.png";
import Moon from "./../Img/game/moon.png";
import MountainsF from "./../Img/game/mountains_front.png";
import MountainsB from "./../Img/game/mountains_behind.png";

const Game = () => {

  const start1 = useRef();
  const moon1 = useRef();
  const mountainsb = useRef();
  const text = useRef();

  useEffect(() => {
    window.addEventListener('scroll',(e)=>{
      let value= window.scrollY;

      start1.current.style.left= value * 0.25 + 'px';
      moon1.current.style.top= value * 1.05 + 'px';
      mountainsb.current.style.top = value * 0.5 + 'px'
      text.current.style.marginRight = value * 3 + 'PX';
     })
  }, []);

  return (
    <div className="game">
      <section className="bg">
        <img src={Start} alt="bg-start" ref={start1} />
        <img src={Moon} alt="bg-moon" ref={moon1} id='moon' />
        <img src={MountainsB} alt="bg-b" ref={mountainsb} />
        <h2 className="text" ref={text}>
          Luck
        </h2>
        <button className="play" id="btn">
          Play
        </button>
        <img src={MountainsF} alt="bg-f" id="mountainsf" />
      </section>
      <section className="sec">
        <h2>Select a game</h2>
        <p>aca el juego</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quibusdam, temporibus obcaecati, ratione est fuga eligendi aut debitis
          doloribus nisi error. Veniam exercitationem beatae dolores ad
          perspiciatis eveniet obcaecati quia.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quibusdam, temporibus obcaecati, ratione est fuga eligendi aut debitis
          doloribus nisi error. Veniam exercitationem beatae dolores ad
          perspiciatis eveniet obcaecati quia.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quibusdam, temporibus obcaecati, ratione est fuga eligendi aut debitis
          doloribus nisi error. Veniam exercitationem beatae dolores ad
          perspiciatis eveniet obcaecati quia.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quibusdam, temporibus obcaecati, ratione est fuga eligendi aut debitis
          doloribus nisi error. Veniam exercitationem beatae dolores ad
          perspiciatis eveniet obcaecati quia.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quibusdam, temporibus obcaecati, ratione est fuga eligendi aut debitis
          doloribus nisi error. Veniam exercitationem beatae dolores ad
          perspiciatis eveniet obcaecati quia.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quibusdam, temporibus obcaecati, ratione est fuga eligendi aut debitis
          doloribus nisi error. Veniam exercitationem beatae dolores ad
          perspiciatis eveniet obcaecati quia.
        </p>
      </section>
    </div>
  );
};

export default Game;
