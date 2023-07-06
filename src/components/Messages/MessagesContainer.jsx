import { connect } from "react-redux";
import { sendMessageActionCreator, changeSendMessageActionCreator } from "../../data/messages-reducer";
import Messages from "./Messages";



const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        changeSendMessage: (text) => {
            dispatch(changeSendMessageActionCreator(text))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer