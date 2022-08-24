import React from "react";
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";

const MyPosts = (props) => {
    
    let postsElements = props.state.posts.map(post =>
        <Post message={post.message} likesCount={post.likesCount} />
    )
    return (
        <div className={styles.content}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea name="new post" placeholder="Add new post"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts