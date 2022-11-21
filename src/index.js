import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/redux-store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

//let _callSubscriber = (state)=>{
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
      //dispatch={store.dispatch.bind(store)}
      //state = {state}
      />
    </Provider>
  </React.StrictMode>
);
//}

// _callSubscriber(store.getState());
// store.subscribe(()=>{
//   const state = store.getState()
//   _callSubscriber(state)
// });
