import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    let postsData = [
        { likesCount: 1, message: 'Good morning' },
        { likesCount: 73, message: "It's my first post" }      
    ]
    return (
        <div>
            <ProfileInfo profileCap="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/NYC_Top_of_the_Rock_Pano_banner.jpg/1200px-NYC_Top_of_the_Rock_Pano_banner.jpg"/>
            <MyPosts posts={postsData}/>
        </div>
    )
}

export default Profile