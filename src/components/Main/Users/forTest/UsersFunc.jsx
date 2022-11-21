import axios from "axios";
import React from "react";
import User from "./User/User";

const UsersFunc = (props) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };
  return (
    <div>
      <div>Users</div>
      <button onClick={getUsers}>Get users</button>
      <div>
        {props.users.map((user) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            photos={user.photos.small}
            status={user.status}
            followed={user.followed}
            follow={props.follow}
            unfollow={props.unfollow}
          ></User>
        ))}
      </div>
    </div>
  );
};

export default UsersFunc;
