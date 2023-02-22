import React, { useEffect, useState } from "react";
import "./../Css/dashboard.scss";
import "./../Css/color-1.scss";
import Aside from "../Components/Aside";
import Home from "../Components/Home";
import About from "./About";
import "./../Css/media.scss";
import Projetc from "./Projetc";
import Game from "./Game";
import { Outlet } from "react-router";

const Dashboard = () => {
  const [dark, setDark] = useState(false);

  let darkcambio = "main-container";
  if (dark) {
    darkcambio += " dark";
  } else {
    darkcambio = "main-container";
  }

  const addDark = () => {
    setDark(!dark);
  };

  return (
    <>
      <div className={darkcambio}>
        <Aside addDark={addDark} />
        <div className="main-content">
          <Home/>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
