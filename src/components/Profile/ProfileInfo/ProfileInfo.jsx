import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import Description from "./Description/Description";
import styles from './ProfileInfo.module.scss'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    for (let contact in props.profile.contacts) {
        
        if (props.profile.contacts[contact] != null && props.profile.contacts[contact].slice(0, 8) === 'https://') {
                props.profile.contacts[contact] = props.profile.contacts[contact].replace('https://', '')
            
        }
    }
    
    return (
        <div className="content">
            <div className={styles.profileCap}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/NYC_Top_of_the_Rock_Pano_banner.jpg/1200px-NYC_Top_of_the_Rock_Pano_banner.jpg" alt="profile-cap" />
            </div>
            <div className={styles.information}>
                <img src={props.profile.photos.large} alt='large-ava' />
                <section>

                    <Description profile={props.profile} />


                </section>
            </div>
        </div >
    )
}

export default ProfileInfo