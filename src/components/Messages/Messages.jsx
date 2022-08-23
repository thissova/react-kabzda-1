import React from "react";
import styles from "./Messages.module.scss"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Messages = (props) => {
    let dialogsElements = props.dialogs
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = props.messages
    .map(m => <Message message={m.message} />)
    
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Messages