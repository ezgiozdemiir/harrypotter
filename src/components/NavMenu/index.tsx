import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavMenu.scss";

const NavMenu = () => {
  return (
    <div className="navmenu">
      <div className="home-link">
        <Link to="/">Harry Potter</Link>
      </div>
      <div className="links">
        <ul>
          <li>
            <NavLink to="/characters">Characters</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
