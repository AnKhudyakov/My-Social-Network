import profileReducer from "./profile-reducer";

const store = {
  _state: {
    profilePage: {
      newPostText: "",
      posts: [
        { id: 1, message: "Hello I'm here...", likes: 2 },
        { id: 2, message: "Hi I'm here too.", likes: 3 },
      ],
    },
    messagePage: {},
    newsPage: {},
    musicPage: {},
    settingsPage: {},
  },
  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("RERENDER");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
