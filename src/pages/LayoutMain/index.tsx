import React from "react";
import { Outlet } from "react-router-dom";
import FixedIcon from "../../components/FixedIcon";
import NavMenu from "../../components/NavMenu";
import "./LayoutMain.scss";

const LayoutMain = () => {
  return (
    <>
      <header>
        <NavMenu />
      </header>
      <main>
        <FixedIcon />
        <Outlet />
      </main>
    </>
  );
};

export default LayoutMain;
