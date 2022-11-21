import React from "react";
import cl from "./User.module.css";
import userPhoto from "../../../../images/avatar.svg";
import { NavLink } from "react-router-dom";
import { UsersAPI } from "../../../../api/api";

const User = (props) => {
  const getFollow = () => {
    props.toggleFollowingProgress(true, props.id);
    UsersAPI.follow(props.id).then((data) => {
      if (data.resultCode === 0) {
        props.follow(props.id);
      }
      props.toggleFollowingProgress(false, props.id);
    });
  };

  const getUnfollow = () => {
    props.toggleFollowingProgress(true, props.id);
    UsersAPI.unfollow(props.id).then((data) => {
      if (data.resultCode === 0) {
        props.unfollow(props.id);
      }
      props.toggleFollowingProgress(false, props.id);
    });
  };

  return (
    <div className={cl.user}>
      <div className={cl.left}>
        <div className={cl.avatar}>
          <NavLink to={"/profile/" + props.id}>
            <img src={props.photos ? props.photos : userPhoto} alt="avatar" />
          </NavLink>
        </div>
        <div className={cl.btn}>
          {props.followed ? (
            <button
              disabled={props.followingInProgress.some(
                (userId) => userId === props.id
              )}
              onClick={getUnfollow}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some(
                (userId) => userId === props.id
              )}
              onClick={getFollow}
            >
              Follow
            </button>
          )}
        </div>
      </div>

      <div className={cl.discription}>
        <div>{props.name}</div>
        <div>{props.status}</div>
      </div>
    </div>
  );
};

export default User;
