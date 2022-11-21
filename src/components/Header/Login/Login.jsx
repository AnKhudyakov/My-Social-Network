import React from "react";
import LoginForm from "./LoginForm";
import cl from "./Login.module.css";
const Login = (props) => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.screen}>
        <div className={cl.body}>
          <div className={cl.text}>Login</div>
          <LoginForm className={cl.form} {...props} />
        </div>
        <div className={cl.login}></div>
      </div>
    </div>
  );
};

export default Login;
