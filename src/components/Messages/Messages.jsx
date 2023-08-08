import React from "react";
import styles from "./Messages.module.scss"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";



const Messages = (props) => {
    let dialogsElements = props.messagesPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messagesPage.messages
        .map(m => <Message message={m.message} id={m.id}/>)
    
    const sendMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    };




    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <div className={styles.textBox}>
                    <AddMessageForm onSubmit={sendMessage}/>
                </div>
            </div>

        </div>
    )
}

export default Messages