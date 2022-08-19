import React from "react";
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post message='Good morning' likesCount='1' />
                <Post message="It's my first post" likesCount='73' />
            </div>
        </div>
    )
}

export default MyPosts