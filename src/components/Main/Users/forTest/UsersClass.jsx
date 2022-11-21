import React from "react";
import User from "./User/User";
import axios from "axios";
import cl from "./Users.module.css";

export default class UsersClass extends React.Component {
  componentDidMount = () => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(
          Math.ceil(response.data.totalCount / 110)
        );
      });
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    const pages = [];
    for (let i = 0; i < pagesCount; i++) {
      pages.push(i + 1);
    }

    const pagesLink = pages.map((page) => (
      <span
        key={page}
        className={this.props.currentPage === page ? cl.active : ""}
        onClick={() => {
          this.onPageChanged(page);
        }}
      >
        {page}
      </span>
    ));
    return (
      <div>
        <div>Users</div>
        <div className={cl.links}>{pagesLink}</div>

        <div>
          {this.props.users.map((user) => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              status={user.status}
              followed={user.followed}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
              photos={user.photos.small}
            ></User>
          ))}
        </div>
      </div>
    );
  }
}
