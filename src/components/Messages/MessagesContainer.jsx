import React from "react";
import {sendMessageActionCreator, changeSendMessageActionCreator} from "../../data/messages-reducer";
import Messages from "./Messages";


const MessagesContainer = (props) => {
    let state = props.store.getState().messagesPage
    let sendMessage = () => {
        
        props.store.dispatch(sendMessageActionCreator())
    }
    let changeSendMessage = (text) => {
        props.store.dispatch(changeSendMessageActionCreator(text))
    }
    
    return (
        <Messages 
            sendMessage={sendMessage}
            changeSendMessage={changeSendMessage}
            state={state}
        />
    )
}

export default MessagesContainer