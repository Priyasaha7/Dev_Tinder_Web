import React from "react";
import { Outlet } from "react-router-dom"; // <-- import Outlet
import NavBar from "./NavBar.jsx";

const Body = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Body;
