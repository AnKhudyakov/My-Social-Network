import React from "react";
import cl from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={cl.post}>
      <div className={cl.id}> id:{props.id}</div>
      <div className={cl.message}>message:{props.message}</div>
      <div className={cl.likes}>likes:{props.likes}</div>
    </div>
  );
};

export default Post;
