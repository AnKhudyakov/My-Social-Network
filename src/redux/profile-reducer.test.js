import profileReducer, { addNewPost, deletePost } from "./profile-reducer";

// 1. Test data
let action = addNewPost("my new post");
let state = {
  posts: [
    { id: 1, message: "Hello I'm here...", likes: 2 },
    { id: 2, message: "Hi I'm here too.", likes: 3 },
  ],
};

it("length of posts should be incremented", () => {
  // 2.1 Action
  let newState = profileReducer(state, action);
  // 3.1 Expectation
  expect(newState.posts.length).toBe(3);
});

/*test('after deleting length of posts should be decremented', () => {
  // 2.1 Action
  let action = deletePost(1)
  let newState = profileReducer(state,action)
  // 3.1 Expectation
  expect(newState.posts.length).toBe(1)
})*/
