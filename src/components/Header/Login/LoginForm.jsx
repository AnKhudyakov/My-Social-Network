import React from "react";

const LoginForm = (props) => {
  return (
    <form>
      <div>
        <input placeholder="Login" />
      </div>
      <div>
        <input placeholder="Password" />
      </div>
      <div>
        <input type="checkbox" /> remember me
      </div>
      <div>
        <button onClick={props.setUserData}>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
