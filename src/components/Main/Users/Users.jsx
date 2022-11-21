import React from "react";
import { Navigate } from "react-router-dom";
import User from "./User/User";
import cl from "./Users.module.css";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1);
  }

  const pagesLink = pages.map((page) => (
    <span
      key={page}
      className={props.currentPage === page ? cl.active : ""}
      onClick={() => {
        props.onPageChanged(page);
      }}
    >
      {page}
    </span>
  ));
  if (!props.isAuth) return <Navigate to="/login" />;
  return (
    <div>
      <div>Users</div>
      <div className={cl.links}>{pagesLink}</div>
      <div>
        {props.users.map((user) => (
          <User
            {...props}
            key={user.id}
            id={user.id}
            name={user.name}
            status={user.status}
            followed={user.followed}
            photos={user.photos.small}
          ></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
