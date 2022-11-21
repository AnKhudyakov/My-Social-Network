import React from "react";
import Header from "./Header";
import { setUserData, showLoader, setLogout } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { AuthAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount = () => {
    this.props.showLoader(true);
    AuthAPI.getAuth().then((data) => {
      this.props.showLoader(false);
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.setUserData(id, email, login);
      }
    });
  };

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setUserData, showLoader, setLogout })(
  HeaderContainer
);
