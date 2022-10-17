import React from "react";
import styles from "./Messages.module.scss"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Messages = (props) => {
    let dialogsElements = props.messagesPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>)
    let messagesElements = props.messagesPage.messages
        .map(m => <Message message={m.message} img={m.img} id={m.id}/>)

    let sendRef = React.createRef()

    const sendMessage = () => {
        
        props.sendMessage()
    };

    let changeSendMessage = () => {
        let text = sendRef.current.value;
        props.changeSendMessage(text)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <div className={styles.textBox}>
                    <div>
                        <textarea onChange={changeSendMessage} placeholder="Put your messages here" cols="30" rows='3'
                                  ref={sendRef} value={props.messagesPage.newTextMessage}/>
                    </div>

                    <div>
                        <button onClick={sendMessage}>send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Messages