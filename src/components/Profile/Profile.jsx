import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profileCap="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/NYC_Top_of_the_Rock_Pano_banner.jpg/1200px-NYC_Top_of_the_Rock_Pano_banner.jpg" />
            <MyPosts
                state={props.state}
                addPost={props.addPost}
                changeNewTextPost={props.changeNewTextPost}
            />
        </div>
    )
}

export default Profile