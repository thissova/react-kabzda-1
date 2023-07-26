import React from "react";
import "./Description.module.scss"
import styles from "../ProfileInfo.module.scss";
import {createField, Input, TextArea} from "../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import {load as loadAccount} from "../../../../data/account";
import {connect} from "react-redux";
import stylesError from "./../../../common/FormsControls/FormsControls.module.scss"

const DescriptionForm = ({handleSubmit, profile, error, load}) => {
    load(profile)
    return <form onSubmit={handleSubmit}>
        <div>
            <button >Save</button>
        </div>
        {error ? <div className={stylesError.formSummaryError}>
            {error}
        </div> : null}
        <div>
            <b>Full name</b>: {createField([], "Full name", "fullName", Input)}
        </div>
        <div>
            <b>Looking for a job</b>: yes/no {createField([], "", "lookingForAJob", Input, {type: "checkbox"})}
        </div>
        <div>
            <b>My professional
                skills</b>: {createField([], "My professional skills", "lookingForAJobDescription", TextArea)}
        </div>


        <div>
            <b>About me</b>: {createField([], "About me", "aboutMe", TextArea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).filter(c => c !== "vk" && c !== "mainLink").map(key => {
            return <div key={key} className={styles.contact}><b>{key}: </b> {createField([], key, "contacts." + key, Input)} </div>
        })}
        </div>
    </form>
}

let DescriptionFormReduxForm = reduxForm({
    form: "DescriptionForm"
})(DescriptionForm)

let DescriptionFormReduxFormConnect = connect(
    state => ({
        initialValues: state.account.data,
        profile: state.profilePage.profile
    }),
    { load: loadAccount }, // bind account loading action creator
)(DescriptionFormReduxForm);

export default DescriptionFormReduxFormConnect