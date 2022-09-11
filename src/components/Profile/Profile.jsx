import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profileCap="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/NYC_Top_of_the_Rock_Pano_banner.jpg/1200px-NYC_Top_of_the_Rock_Pano_banner.jpg" />
            <MyPostsContainer
                store={props.store}
            />
        </div>
    )
}

export default Profile