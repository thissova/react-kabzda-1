import React, {useState} from "react";
import Description from "./Description/Description";
import styles from './ProfileInfo.module.scss'
import userPhoto from '../../../assets/images/user_icon.png'
import ProfileStatus from "./Status";
import Preloader from "../../common/Preloader/Preloader";
import DescriptionForm from "./Description/DescriptionForm";


const ProfileInfo = ({profile, isOwner, status, setStatus, setPhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        let file = e.target.files[0]

        setPhoto(file)
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => setEditMode(false))
    }

    return (
        <div className="content">
            <div className={styles.information}>
                {profile.photos.large ? <img src={profile.photos.large} alt=''/> :
                    <img src={userPhoto} alt=''/>}
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <section>
                    {editMode
                        ? <DescriptionForm onSubmit={onSubmit}/> :
                        <Description profile={profile} isOwner={isOwner} goToEditMode={() => {
                            setEditMode(true)
                        }}/>}
                </section>
                <div><ProfileStatus className={styles.status} status={status} setStatus={setStatus}/></div>
            </div>
        </div>
    )
}

export default ProfileInfo