import React from "react";
import styles from './ProfileInfo.module.scss'

const ProfileInfo = (props) => {
    return (
        <div className="content">
            <div className={styles.profileCap}>
                <img src={props.profileCap} alt="profile-cap" />
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