import React from "react";
import { addPostActionCreator, changeNewTextPostActionCreator } from "../../../data/profile-reducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";
const MyPostsContainer = (props) => {
    
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
            
                let changeNewTextPost = (text) => {
                    store.dispatch(changeNewTextPostActionCreator(text))
                }
                return(
                <MyPosts
                addPost={addPost}
                    changeNewTextPost={changeNewTextPost}
                    posts={state.profilePage.posts}
                    newTextPost={state.profilePage.newTextPost}
                />
            )}
        }</StoreContext.Consumer>
    )

}

export default MyPostsContainer