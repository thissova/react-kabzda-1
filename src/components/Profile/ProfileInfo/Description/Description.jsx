import React from "react";
import "./Description.module.scss"

let Description = (props) => {
    return (
        <div>
            {props.profile.fullName}
            <br />

            About me: {props.profile.aboutMe}
            <br />

            {props.profile.lookingForAJob ? 'Looking for a job' : 'Don\'t looking for a job'}
            <br />

            Description about job: {props.profile.lookingForAJobDescription}
            <br />

            <button onClick={() => {
                if (props.profile.contacts.facebook === null || props.profile.contacts.facebook === "") {
                    alert('I haven\'t got Facebook')
                } else {
                    window.open(`https://${props.profile.contacts.facebook}`, "_blank")
                }
            }}>Facebook</button>
            <br />
            <button onClick={() => {
                if (props.profile.contacts.website === null || props.profile.contacts.website === "") {
                    alert('I haven\'t got website')
                } else {
                    window.open(`https://${props.profile.contacts.website}`, "_blank")
                }
            }}>Website</button>
            <br />
            <button onClick={() => {
                if (props.profile.contacts.twitter === null || props.profile.contacts.twitter === "") {
                    alert('I haven\'t got Twitter')
                } else {
                    window.open(`https://${props.profile.contacts.twitter}`, "_blank")
                }
            }}>Twitter</button>
            <br />
            <button onClick={() => {
                if (props.profile.contacts.instagram === null || props.profile.contacts.instagram === "") {
                    alert('I haven\'t got Instagram')
                } else {
                    window.open(`https://${props.profile.contacts.instagram}`, "_blank")
                }
            }}>Instagram</button>
            <br />
            <button onClick={() => {
                if (props.profile.contacts.youtube === null || props.profile.contacts.youtube === "") {
                    alert('I haven\'t got YouTube')
                } else {
                    window.open(`https://${props.profile.contacts.youtube}`, "_blank")
                }
            }}>YouTube</button>
            <br />
            <button onClick={() => {
                if (props.profile.contacts.github === null || props.profile.contacts.github === "") {
                    alert('I haven\'t got GitHub')
                } else {
                    window.open(`https://${props.profile.contacts.github}`, "_blank")
                }
            }}>GitHub</button>
            <br />


        </div>

    )
}

export default Description