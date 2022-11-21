import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./Dialog.module.css";

const Dialog = (props) => {
  return (
    <div className={cl.dialog}>
      <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

export default Dialog;
