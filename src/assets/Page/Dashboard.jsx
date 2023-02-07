import React from "react";
import "./../Css/dashboard.scss";
import "./../Css/color-1.scss";
import Aside from "../Components/Aside";
import Home from "../Components/Home";
import About from "./About";
import './../Css/media.scss'
import Projetc from "./Projetc";
import Game from "./Game";

const Dashboard = () => {
  return (
    <>
      <div className="main-container">
          <Aside />
        <div className="main-content">
          <Game/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
