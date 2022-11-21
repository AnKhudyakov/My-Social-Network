import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import cl from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.screen}>
        <div className={cl.img}></div>
        <div className={cl.body}>
          <ProfileInfo profile={props.profile} />
          <MyPostsContainer></MyPostsContainer>
        </div>
      </div>
    </div>
  );
};

export default Profile;
