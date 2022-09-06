import React from "react";
import styles from "./Messages.module.scss"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, changeSendMessageActionCreator} from "../../data/dialogs-reducer";


const Messages = (props) => {
    let dialogsElements = props.state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>)
    let messagesElements = props.state.messages
        .map(m => <Message message={m.message} img={m.img} id={m.id}/>)

    let sendRef = React.createRef()

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    };

    let changeSendMessage = () => {
        let text = sendRef.current.value;
        props.dispatch(changeSendMessageActionCreator(text))
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
                                  ref={sendRef} value={props.state.newTextMessage}/>
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