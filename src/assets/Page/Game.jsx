import React, { useEffect, useRef, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./../Css/game.scss";
import "./../Css/color-1.scss";
import Start from "./../Img/game/stars.png";
import Moon from "./../Img/game/moon.png";
import MountainsF from "./../Img/game/mountains_front.png";
import MountainsB from "./../Img/game/mountains_behind.png";
import Menji from "./../Img/game/menji.jpg";
import Tictac from "./../Img/game/tictac.png";
import Dados from "./../Img/game/dados.png";
import Swal from "sweetalert2";
import PoroPlay from "./../Img/game/poroplay.png";
import Poro from "../Components/Poro";

const Game = () => {
  const [active, setActive] = useState(null);
  const start1 = useRef();
  const moon = useRef();
  const mountainsb = useRef();

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let value = window.scrollY;
      start1.current.style.left = value * 0.25 + "px";
      moon.current.style.top = value * 1.05 + "px";
      mountainsb.current.style.top = value * 0.5 + "px";
    });
  }, []);

  const playModal = (gameselect) => {
    setActive(gameselect);

    let direction
    switch (gameselect) {
      case 'game1':
        direction='https://javier1793-op.github.io/minecraft-clone/'
        break;
      case 'game2':
        direction='https://javier1793-op.github.io/Tictactoe/'
        break;
      case 'game3':
        direction='https://javier1793-op.github.io/Dices/'
        break;
    
    }

    Swal.fire({
      imageUrl:
        "https://www.seekpng.com/png/detail/318-3185028_poros-league-of-legends-png.png",
      imageAlt: "A tall image",
      text: "for all Game over there is a Play again",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Go for it!",
    }).then((result) => {
      if (result.isConfirmed) {
        location.href = direction;
      }
    });
  };

  return (
    <div className="game">
      <section className="bg">
        <img src={Start} alt="bg-start" ref={start1} />
        <img src={Moon} alt="bg-moon" id="moon" ref={moon} />
        <img src={MountainsB} alt="bg-b" ref={mountainsb} />

        <Link
          activeClass="active"
          to="selector"
          spy={true}
          smooth={true}
          offset={-120}
          duration={900}
        >
          {" "}
          <button className="play" id="btn">
            Play
          </button>
        </Link>

        <img src={MountainsF} alt="bg-f" id="mountainsf" />
      </section>
      <section className="sec">
        <h2>Select a game</h2>
        <div className="container-selector" id="selector">
          <div className="icon">
            <div
              className={`imgBox ${active == "game1" ? "active" : ""}`}
              onClick={() => {
                playModal("game1");
              }}
            >
              <img src={Menji} alt="img_game_1" id="juego1" />
            </div>
            <div
              className={`imgBox ${active == "game2" ? "active" : ""}`}
              onClick={() => {
                playModal("game2");
              }}
            >
              <img src={Tictac} alt="img_game_1" id="juego2" />
            </div>
            <div
              className={`imgBox ${active == "game3" ? "active" : ""}`}
              onClick={() => {
                playModal("game3");
              }}
            >
              <img src={Dados} alt="img_game_1" id="juego3" />
            </div>
          </div>
          <Poro />
        </div>
        <div className="porito"></div>
      </section>
    </div>
  );
};

export default Game;
