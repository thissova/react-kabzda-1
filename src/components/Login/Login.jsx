import React from "react";
import {reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../data/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "../common/FormsControls/FormsControls.module.scss"

export const LoginForm = ({error, captchaUrl, handleSubmit}) => {
    return (<form onSubmit={handleSubmit}>
        {error ? <div className={styles.formSummaryError}>
            {error}
        </div> : null}


        {createField([required], "Email", "email", Input)}
        {createField([required], "Password", "password", Input, {type: "password"})}
        {createField([], "", "rememberMe", "input", {type: "checkbox"}, "rememberMe")}
        {captchaUrl && <img src={captchaUrl} alt={"captcha"}/>}
        {captchaUrl && createField([required], "Symbols from image", "captcha", Input)}
        <div>
            <button>Login</button>
        </div>
    </form>)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
export const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>)
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)