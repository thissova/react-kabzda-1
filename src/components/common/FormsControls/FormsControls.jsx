import React from "react";
import styles from './FormsControls.module.scss'
import {Field} from "redux-form";

const FormControl = ({meta, children}) => {
    const hasError = meta.error && meta.touched
    return <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
        <div>
            {children}
        </div>
        {hasError ? <span>{meta.error}</span> : null}
    </div>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props} ><input {...input} {...restProps}/></FormControl>
}

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>

}

export const createField = (validators, placeholder, name, component, props, text) => (
    <div>
        <Field validate={validators} placeholder={placeholder} name={name} component={component} {...props}/> {text}
    </div>
)
