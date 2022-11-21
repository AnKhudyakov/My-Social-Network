import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ProfileAPI } from "../../../api/api";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount = () => {
    let profileId = this.props.router.params.userId;
    if (!profileId) {
      profileId = 26746;
    }
    ProfileAPI.getProfile(profileId).then((data) => {
      this.props.setUserProfile(data);
    });
  };
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
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

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(AuthRedirectComponent)
);
