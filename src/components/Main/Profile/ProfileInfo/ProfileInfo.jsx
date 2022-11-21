import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import profilePhoto from "../../../../images/avatar.svg";
import cl from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  let avatarSrc = props.profile.photos.large
    ? props.profile.photos.large
    : profilePhoto;
  return (
    <div className={cl.profile}>
      <div className={cl.avatar}>
        <img src={avatarSrc} alt="avatar"></img>
      </div>
      <div className={cl.discription}>
        <div> User ID: {props.profile.userId}</div>
        <div>Name: {props.profile.fullName}</div>
        <div>
          <p>My contacts:</p>
          <div className={cl.contacts}>
            <p>Facebook: {props.profile.contacts.facebook}</p>
            <p>Instagram: {props.profile.contacts.instagram}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
