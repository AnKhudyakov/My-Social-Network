import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={cl.header}>
      <div className={cl.loginBlock}>
        {props.isAuth ? (
          <div>
            <div>
              Signed in as <NavLink to="/profile">{props.login}</NavLink>
            </div>
            <div className={cl.logout}>
              <NavLink to="/login" onClick={props.setLogout}>
                <button>Sugn out</button>
              </NavLink>
            </div>
          </div>
        ) : (
          <div>
            <NavLink to="/login">Login</NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
