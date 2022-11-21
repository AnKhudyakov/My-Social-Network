import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Header/Login/Login";
import cl from "./Main.module.css";
import ProfileContainer from "./Profile/ProfileContainer";
import UsersContainer from "./Users/UsersContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";

const Main = (props) => {
  return (
    <main className={cl.main}>
      <Routes>
        <Route path="/profile/" element={<ProfileContainer />} />
        <Route path="/" element={<Login />} />
        <Route path="/profile/:userId" element={<ProfileContainer />} />
        <Route path="/messages" element={<DialogsContainer />} />
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default Main;
