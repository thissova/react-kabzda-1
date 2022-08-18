import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Messages.module.scss"


const Messages = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog + ' ' + styles.active}>
                    <NavLink to="/messages/1">Andrew</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/messages/2">Semen</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/messages/3">Boris</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hello</div>
                <div className={styles.message}>Hi!</div>
                <div className={styles.message}>How are you?</div>
                <div className={styles.message}>I'm good and you?</div>
                <div className={styles.message}>I'm too</div>
            </div>
        </div>
    )
}

export default Messages