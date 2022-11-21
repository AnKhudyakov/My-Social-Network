import React from "react";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  updateMessageText,
  addNewMessage,
} from "../../../redux/dialogs-reducer";
import { setUsers, showLoader } from "../../../redux/users-reducer.js";

import Dialogs from "./Dialogs";
import { UsersAPI } from "../../../api/api";

class DialogsContainer extends React.Component {
  /*componentDidMount = () => {
    let profileId = this.props.router.params.userId;
    if (!profileId) {
      profileId = 26746;
    }
    ProfileAPI.getProfile(profileId).then((data) => {
      this.props.setUserProfile(data);
    });
  };*/

  componentDidMount = () => {
    this.props.showLoader(true);
    UsersAPI.getFollowingUsers().then((data) => {
      this.props.showLoader(false);
      this.props.setUsers(data.items.filter((item) => item.followed));
    });
  };

  render() {
    return <Dialogs {...this.props} />;
  }
}

let AuthRedirectComponent = withAuthRedirect(DialogsContainer);

let mapStateToProps = (state) => ({
  //profile: state.DialogsPage.profile,
  messages: state.dialogsPage.messages,
  isAuth: state.auth.isAuth,
  users: state.usersPage.users,
  newMessageText: state.dialogsPage.newMessageText,
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {
  updateMessageText,
  addNewMessage,
  showLoader,
  setUsers,
})(withRouter(AuthRedirectComponent));
