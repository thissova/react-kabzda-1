import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {TextArea} from "../../../common/FormsControls/FormsControls";

const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={TextArea} validate={[required, maxLengthCreator(38)]} name={"addNewPost"} placeholder={"Add new post"}/>
        </div>
        <div>
            <button >Add post</button>
        </div>
    </form>
}
export default reduxForm({form: "AddPostForm"})(AddPostForm)