import React from "react";
import preloader from "../../../images/loader.svg";
import cl from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={cl.loader}>
      <h2>Please wait, the page is loading...</h2>
      <div>
        <img src={preloader} alt="Loading..." />
      </div>
    </div>
  );
};

export default Preloader;
