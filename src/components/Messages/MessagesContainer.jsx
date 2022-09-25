import React from "react";
import { sendMessageActionCreator, changeSendMessageActionCreator } from "../../data/messages-reducer";
import StoreContext from "../../StoreContext";
import Messages from "./Messages";


const MessagesContainer = (props) => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().messagesPage
                let sendMessage = () => {

                    store.dispatch(sendMessageActionCreator())
                }
                let changeSendMessage = (text) => {
                    store.dispatch(changeSendMessageActionCreator(text))
                }
                return (
                    <Messages
                        sendMessage={sendMessage}
                        changeSendMessage={changeSendMessage}
                        state={state}
                    />
                )
            }
        }</StoreContext.Consumer>
    )
}

export default MessagesContainer