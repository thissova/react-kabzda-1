import React from "react";
import styles from './FormsControls.module.scss'

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.error && meta.touched
    return <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
        <div>
            {props.children}
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
