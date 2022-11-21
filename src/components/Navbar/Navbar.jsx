import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./Navbar.module.css";

const setActive = ({ isActive }) => (isActive ? `${cl.active}` : "");

const Navbar = () => {
  return (
    <nav className={cl.nav}>
      <div className={cl.links}>
        <NavLink to={"/profile"} className={setActive}>
          Profile
        </NavLink>
        <NavLink to={"/users"} className={setActive}>
          Find Users
        </NavLink>
        <NavLink to={"/messages"} className={setActive}>
          Messages
        </NavLink>
        <NavLink to={"/news"} className={setActive}>
          News
        </NavLink>
        <NavLink to={"/music"} className={setActive}>
          Music
        </NavLink>
        <NavLink to={"/settings"} className={setActive}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
