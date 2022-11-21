const ADD_NEW_POST = "ADD_NEW_POST";
const NEW_POST_TEXT = "NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const DELETE_POST = "DELETE_POST";

let initialState = {
  profile: null,
  newPostText: "",
  posts: [
    { id: 1, message: "Hello I'm here...", likes: 2 },
    { id: 2, message: "Hi!I see it.", likes: 3 },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: {
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push({
        id: state.posts.length + 1,
        message: state.newPostText,
        likes: 0,
      });
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    default:
      return state;
  }
};

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const addNewPost = () => ({ type: ADD_NEW_POST });
export const updateText = (text) => ({ type: NEW_POST_TEXT, newText: text });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export default profileReducer;
