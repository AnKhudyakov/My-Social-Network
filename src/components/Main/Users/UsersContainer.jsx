import { connect } from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  showLoader,
  toggleFollowingProgress,
} from "../../../redux/users-reducer.js";
import { UsersAPI } from "../../../api/api";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
class UsersContainer extends React.Component {
  componentDidMount = () => {
    this.props.showLoader(true);
    UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(
      (data) => {
        this.props.showLoader(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(Math.ceil(data.totalCount / 55));
      }
    );
  };

  onPageChanged = (pageNumber) => {
    this.props.showLoader(true);
    this.props.setCurrentPage(pageNumber);
    UsersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.showLoader(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users {...this.props} onPageChanged={this.onPageChanged} />
        )}
      </>
    );
  }
}

let AuthRedirectComponent = withAuthRedirect(UsersContainer);

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth,
  };
};
/*const mapDispatchToProps = (dispatch) => {
    return { 
        follow: (userId) => {
            dispatch({type:"FOLLOW", userId })
        },
        unfollow: (userId) => {
            dispatch({type:"UNFOLLOW", userId })
        },
        setUsers: (users) => {
            dispatch({type:"SET_USERS", users })
        },
        setCurrentPage: (currentPage) => {
            dispatch({type:"SET_CURRENT_PAGE", currentPage})
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch({type:"SET_TOTAL_USERS_COUNT", totalUsersCount})
        },
        showLoader: (isFetching) => {
            dispatch({type:"TOGGLE_IS_FETCHING", isFetching})
        }
    }
}*/

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  showLoader,
  toggleFollowingProgress,
})(AuthRedirectComponent);
