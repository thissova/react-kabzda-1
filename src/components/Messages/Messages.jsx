import React from "react";
import styles from "./Messages.module.scss"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Messages = (props) => {
    let dialogsData = [
        { id: '1', name: "Semen" },
        { id: '2', name: "Borya" },
        { id: '3', name: "Andrew" },

    ]
    let dialogsElements = dialogsData
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    
    let messagesData =[
        {id: 1 ,message: 'Hi'},
        {id: 2 ,message: 'Hi'},
        {id: 3 ,message: 'How are you?'},
        {id: 4 ,message: "I'm good and you"},
        {id: 5 ,message: 'I\'m too'},
    ]
    let messagesElements = messagesData
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