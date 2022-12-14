const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IN_PROGRESS = "TOGGLE_IN_PROGRESS";

let initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 1,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      let stateCopy = {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
      return stateCopy;
    }
    case UNFOLLOW: {
      let stateCopy = {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
      return stateCopy;
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IN_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: "FOLLOW", userId });
export const unfollow = (userId) => ({ type: "UNFOLLOW", userId });
export const setUsers = (users) => ({ type: "SET_USERS", users });
export const setCurrentPage = (currentPage) => ({
  type: "SET_CURRENT_PAGE",
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: "SET_TOTAL_USERS_COUNT",
  totalUsersCount,
});
export const showLoader = (isFetching) => ({
  type: "TOGGLE_IS_FETCHING",
  isFetching,
});
export const toggleFollowingProgress = (followingInProgress, userId) => ({
  type: "TOGGLE_IN_PROGRESS",
  followingInProgress,
  userId,
});

export default usersReducer;
