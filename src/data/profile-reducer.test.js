import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";
let initialState = {
    posts: [
        {id: 1, likesCount: 1, message: 'Good morning'},
        {id: 0, likesCount: 73, message: "It's my first post"}
    ],
    profile: null,
    status: ""
}

 it('new post should be added', () => {
     let action = addPostActionCreator("blabla");

     // 2. action
     let newState = profileReducer(initialState, action);

     // 3. expectation
     expect(newState.posts.length).toBe(3);
 })
it('message of new post should be correct', () => {

     let action = addPostActionCreator("blabla");

     // 2. action
     let newState = profileReducer(initialState, action);

     // 3. expectation
     expect(newState.posts[0].message).toBe("blabla");
 })
it('after deleting length of messages should be decrement', () => {

     let action = deletePostActionCreator(1);

     // 2. action
     let newState = profileReducer(initialState, action);

     // 3. expectation
     expect(newState.posts.length).toBe(1);
 })
it('after deleting length shouldn\'t be decrement if id is incorrect', () => {

     let action = deletePostActionCreator(1000);

     // 2. action
     let newState = profileReducer(initialState, action);

     // 3. expectation
     expect(newState.posts.length).toBe(2);
 })