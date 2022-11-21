const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
const NEW_MESSAGE_TEXT = "NEW_MESSAGE_TEXT";

let initialState = {
  newMessageText: "",
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "Hello!" },
    { id: 3, message: "How are you" },
    { id: 4, message: "Everything's good" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE: {
      let stateCopy = {
        ...state,
        messages: [
          ...state.messages,
          { id: state.messages.length + 1, message: state.newMessageText },
        ],
      };
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    case NEW_MESSAGE_TEXT: {
      return { ...state, newMessageText: action.newText };
    }
    default:
      return state;
  }
};

export const addNewMessage = () => ({ type: ADD_NEW_MESSAGE });
export const updateMessageText = (text) => ({
  type: NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
