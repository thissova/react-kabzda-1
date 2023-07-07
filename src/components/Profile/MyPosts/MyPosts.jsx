import React from "react";
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";
import ChangeTextArea from "./ChangeTextArea";
const MyPosts = (props) => {
    
    let postsElements = props.posts.map(post =>
        <Post message={post.message} likesCount={post.likesCount} />
    )

    let postRef = React.createRef();

    let addPost = () => {
        props.addPost()
        
    }

    return (
        <div className={styles.content}>
            <h2>My posts</h2>
            <div>
                <ChangeTextArea newTextPost={props.newTextPost} changeNewTextPost={props.changeNewTextPost} postRef={postRef}/>
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