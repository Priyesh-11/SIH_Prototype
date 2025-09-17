import React from "react";
import { Link, useLocation } from "react-router-dom";
import profileImg from "../../imgs/profile.png";
import "./TopBar.css";

const routeTitleMap = {
  "/": "Railway Operations Dashboard",
  "/trains": "Trains",
  "/routes": "Routes",
  "/stations": "Stations",
  "/analytics": "Analytics",
  "/profile": "Profile",
};

const TopBar = () => {
  const location = useLocation();
  const title = routeTitleMap[location.pathname] || "RailOps";

  return (
    <div className="TopBar">
      <h1 className="TopBar__title">{title}</h1>
      <Link to="/profile" className="TopBar__profile">
        <img src={profileImg} alt="Profile" />
        <span>Profile</span>
      </Link>
    </div>
  );
};

export default TopBar;


