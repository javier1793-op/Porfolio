import React from "react";
import "./../Css/dashboard.scss";
import "./../Css/color-1.scss";
import Aside from "../Components/Aside";
import Home from "../Components/Home";

const Dashboard = () => {
  return (
    <>
      <div className="main-container">
          <Aside />
        <div className="main-content">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
