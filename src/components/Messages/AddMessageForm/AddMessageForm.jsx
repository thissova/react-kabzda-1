import React from "react";
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"}/>
        </div>

        <div>
            <button>send</button>
        </div>
    </form>
}

export default reduxForm({form: "AddMessageForm"})(AddMessageForm)