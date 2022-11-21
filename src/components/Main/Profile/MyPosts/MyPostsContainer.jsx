//import React from 'react'
import { connect } from "react-redux";
import MyPosts from "./MyPosts";
import { addNewPost, updateText } from "../../../../redux/profile-reducer";
//import Post from './Post/Post'

// const SuperMyPostsContainer = (props) => {
//     const addPost=() => {
//         props.dispatch({type: "ADD_NEW_POST"});
//     }

//     const updateText=(text) => {
//     props.dispatch({type: "NEW_POST_TEXT", newText: text});
//     }

//     let postElement = props.state.posts.map((post) => <Post key={post.id} id={post.id} message={post.message} likes={post.likes}/>)

//     return (
//         <MyPosts
//         updateText={updateText}
//         addPost={addPost}
//         postElement={postElement}
//         newPostText={props.state.newPostText}/>
//     );
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
/*let mapDispatchToProps = (dispatch) => {
   
    return {
        updateText: (text) => {dispatch({type: "NEW_POST_TEXT", newText: text})},
        addPost: () => {dispatch({type: "ADD_NEW_POST"})}
    }
}*/

const MyPostsContainer = connect(mapStateToProps, { addNewPost, updateText })(
  MyPosts
);

export default MyPostsContainer;
