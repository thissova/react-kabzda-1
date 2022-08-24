import React from "react";
import styles from "./Messages.module.scss"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Messages = (props) => {
    let dialogsElements = props.state.dialogs
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>)
    let messagesElements = props.state.messages
    .map(m => <Message message={m.message} img={m.img} id={m.id}/>)
    
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