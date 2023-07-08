import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../data/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "../common/FormsControls/FormsControls.module.scss"

export const LoginForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        {props.error ? <div className={styles.formSummaryError}>
            {props.error}
        </div> : null}
        <div>
            <Field validate={[required]} placeholder={"Email"} name={"email"} component={Input}/>
        </div>
        <div>
            <Field validate={[required]} placeholder={"Password"} name={"password"} type={"password"}
                   component={Input}/>
        </div>
        <div>
            <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
export const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)