import { connect } from "react-redux";
import { sendMessageActionCreator, changeSendMessageActionCreator } from "../../data/messages-reducer";
import Messages from "./Messages";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
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

const  MessagesContainer = compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Messages)
export default MessagesContainer