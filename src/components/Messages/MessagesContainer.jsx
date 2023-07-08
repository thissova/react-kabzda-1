import { connect } from "react-redux";
import { sendMessageActionCreator, changeSendMessageActionCreator } from "../../data/messages-reducer";
import Messages from "./Messages";
import {compose} from "redux";



const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageActionCreator(newMessageBody))
        },
        changeSendMessage: (text) => {
            dispatch(changeSendMessageActionCreator(text))
        }
    }
}

const  MessagesContainer = compose(connect(mapStateToProps, mapDispatchToProps))(Messages)
export default MessagesContainer