import React from "react";
import styles from './ProfileInfo.module.scss'

const ProfileInfo = (props) => {
    return (
        <div className="content">
            <div className={styles.profileCap}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/NYC_Top_of_the_Rock_Pano_banner.jpg/1200px-NYC_Top_of_the_Rock_Pano_banner.jpg" alt="profile-cap" />
            </div>
            <div className={styles.information}>
                {/* {props.ava}
                {props.bio} */}
                ava + bio
            </div>
        </div >
    )
}

export default ProfileInfo