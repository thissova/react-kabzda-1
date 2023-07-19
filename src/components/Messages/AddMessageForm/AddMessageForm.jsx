import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";
import "./AddMessageForm.module.scss"

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[maxLengthCreator(100), required]} component={TextArea} name={"newMessageBody"} placeholder={"Enter your message"}/>
        </div>

        <div>
            <button>send</button>
        </div>
    </form>
}

export default reduxForm({form: "AddMessageForm"})(AddMessageForm)