import React from "react";
import React from "react";

import { setUserData } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { AuthAPI } from "../../api/api";

class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setUserData })(LoginContainer);
