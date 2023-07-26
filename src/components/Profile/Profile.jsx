import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} setStatus={props.setStatus}
                         isOwner={props.isOwner} setPhoto={props.setPhoto} saveProfile={props.saveProfile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile