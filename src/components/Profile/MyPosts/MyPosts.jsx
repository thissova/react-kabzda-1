import React from "react";
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";

const MyPosts = (props) => {
    
    let postsElements = props.state.posts.map(post =>
        <Post message={post.message} likesCount={post.likesCount} />
    )

    let postRef = React.createRef();

    let addPost = () => {
        let text = postRef.current.value
        props.addPost(text)
    }
    return (
        <div className={styles.content}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea name="new post" placeholder="Add new post" ref={postRef}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts