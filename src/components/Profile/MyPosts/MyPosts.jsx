import React from "react";
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";
import AddPostForm from "./AddPostForm/AddPostForm";

const MyPosts = React.memo((props) => {
    let postsElements = props.posts.map(post =>
        <Post message={post.message} likesCount={post.likesCount}/>
    )
    let addPost = (values) => {
        props.addPost(values.addNewPost)
    }
    return (
        <div className={styles.content}>
            <h2>My posts</h2>
            <AddPostForm onSubmit={addPost}/>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts