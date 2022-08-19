import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Messages.module.scss"

const UserCard = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={"/messages/" + props.id} activeClassName={styles.active}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {
    return(
        <div className={styles.message}>{props.message}</div>
    )
}
const Messages = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <UserCard name="Semen" id="1" />
                <UserCard name="Borya" id="2" />
                <UserCard name="Andrew" id="3" />
            </div>
            <div className={styles.messages}>
                <Message message="Hi"/>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="I'm good and you?"/>
                <Message message="I'm too"/>

            </div>
        </div>
    )
}

export default Messages