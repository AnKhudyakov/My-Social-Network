import React from "react";
import Post from "./Post/Post";
import cl from "./MyPosts.module.css";

const MyPosts = (props) => {
  const addPost = () => {
    props.addNewPost();
  };
  const updateText = (e) => {
    let text = e.target.value;
    props.updateText(text);
  };

  let postElement = props.posts.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      message={post.message}
      likes={post.likes}
    />
  ));

  return (
    <div>
      <div className={cl.textarea}>
        <textarea
          value={props.newPostText}
          onChange={updateText}
          placeholder={"Enter new post..."}
        ></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add new post</button>
      </div>
      <div>{postElement}</div>
    </div>
  );
};

export default MyPosts;
