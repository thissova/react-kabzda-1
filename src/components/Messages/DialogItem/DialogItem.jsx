import React from "react";
import { NavLink } from "react-router-dom";
import styles from './../Messages.module.scss'

const DialogItem = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={"/messages/" + props.id} activeClassName={styles.active} className={styles.linkedText}>
                {props.name}
            </NavLink>
        </div>
    )
}



export default DialogItem