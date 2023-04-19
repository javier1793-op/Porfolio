import React, { useEffect, useState } from "react";
import "./../Css/dashboard.scss";
import "./../Css/color-1.scss";
import Aside from "../Components/Aside";
import Home from "../Components/Home";
import About from "./About";
import Projetc from "./Projetc";
import Game from "./Game";
import { Outlet } from "react-router";

const Dashboard = () => {
  const [dark, setDark] = useState(false);

  let darkcambio = "main-container dark";
  if (dark) {
    darkcambio += "main-container";
  } else {
    darkcambio = "main-container dark";
  }

  const addDark = () => {
    setDark(!dark);
  };

  return (
    <>
      <div className={darkcambio}>
        <Aside addDark={addDark}  />
        <div className="main-content">
          <Home/>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
