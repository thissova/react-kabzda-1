import React from "react";
import Description from "./Description/Description";
import styles from './ProfileInfo.module.scss'
import userPhoto from '../../../assets/images/user_icon.png'
import ProfileStatus from "./Status";
import Preloader from "../../common/Preloader/Preloader";


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
            <div className={styles.information}>
                {props.profile.photos.large ? <img src={props.profile.photos.large} alt=''/> : <img src={userPhoto} alt=''/>}
                <section>
                    <Description profile={props.profile} />
                </section>
                    <div><ProfileStatus className={styles.status} status={props.status} setStatus={props.setStatus}/></div>
            </div>
        </div >
    )
}

export default ProfileInfo