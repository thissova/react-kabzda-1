import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from './Profile.module.scss'

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=800&h=300' alt="profile-cap"/>
            </div>
            <div>
                ava + bio
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile