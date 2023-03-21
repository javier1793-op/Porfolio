import React from "react";
import Porologo from "./../Img/game/poro.jpg";

const Poro = () => {

  return (
    <div className="content-game">
      <div className="card">
        <img src={Porologo} alt="poro-logo" className="poro" />
      </div>
      <span>goog luck</span>
    </div>
  );
};

export default Poro;
