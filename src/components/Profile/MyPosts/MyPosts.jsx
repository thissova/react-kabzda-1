import React from "react";
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="new post" placeholder="Add new post"></textarea>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post message='Good morning' likesCount='1'/>
                <Post message="It's my first post" likesCount='73'/>
                
            </div>
        </div>
    )
}

export default MyPosts