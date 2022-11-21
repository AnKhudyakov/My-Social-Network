const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_LOGOUT = "TOGGLE_IS_LOGOUT";
let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.data, isAuth: true };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_LOGOUT: {
      return { ...state, isAuth: false };
    }
    default:
      return state;
  }
};

export const setUserData = (id, email, login) => ({
  type: "SET_USER_DATA",
  data: { id, email, login },
});
export const showLoader = (isFetching) => ({
  type: "TOGGLE_IS_FETCHING",
  isFetching,
});
export const setLogout = () => ({
  type: "TOGGLE_IS_LOGOUT",
});

export default authReducer;
