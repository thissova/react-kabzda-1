import React from "react";

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
            
            <a onClick={() => {
                if (props.profile.contacts.facebook === null) {
                    alert('I haven\'t got Facebook')
                } else {
                    window.open(`https://${props.profile.contacts.facebook}`, "_blank")
                }
            }}>Facebook</a>
            <br />
            <a onClick={() => {
                if (props.profile.contacts.website === null) {
                    alert('I haven\'t got website')
                } else {
                    window.open(`https://${props.profile.contacts.website}`, "_blank")
                }
            }}>Website</a>
            <br />
            <a onClick={() => {
                if (props.profile.contacts.twitter === null) {
                    alert('I haven\'t got Twitter')
                } else {
                    window.open(`https://${props.profile.contacts.twitter}`, "_blank")
                }
            }}>Twitter</a>
            <br />
            <a onClick={() => {
                if (props.profile.contacts.instagram === null) {
                    alert('I haven\'t got Instagram')
                } else {
                    window.open(`https://${props.profile.contacts.instagram}`, "_blank")
                }
            }}>Instagram</a>
            <br />
            <a onClick={() => {
                if (props.profile.contacts.youtube === null) {
                    alert('I haven\'t got YouTube')
                } else {
                    window.open(`https://${props.profile.contacts.youtube}`, "_blank")
                }
            }}>YouTube</a>
            <br />
            <a onClick={() => {
                if (props.profile.contacts.github === null) {
                    alert('I haven\'t got GitHub')
                } else {
                    window.open(`https://${props.profile.contacts.github}`, "_blank")
                }
            }}>GitHub</a>
            <br />
            

        </div>

    )
}

export default Description