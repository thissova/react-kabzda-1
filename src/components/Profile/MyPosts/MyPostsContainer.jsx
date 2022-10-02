import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, changeNewTextPostActionCreator } from "../../../data/profile-reducer";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newTextPost: state.profilePage.newTextPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        changeNewTextPost: (text) => {
            dispatch(changeNewTextPostActionCreator(text))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer