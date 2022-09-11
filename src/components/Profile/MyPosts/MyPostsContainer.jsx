import React from "react";
import { addPostActionCreator, changeNewTextPostActionCreator } from "../../../data/profile-reducer";
import MyPosts from "./MyPosts";
const MyPostsContainer = (props) => {
    
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let changeNewTextPost = (text) => {
        props.store.dispatch(changeNewTextPostActionCreator(text))
    }



    return (
        <MyPosts
            addPost={addPost}
            changeNewTextPost={changeNewTextPost}
            posts={state.profilePage.posts}
            newTextPost={state.profilePage.newTextPost}
        />
    )

}

export default MyPostsContainer