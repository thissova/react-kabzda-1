import { connect } from "react-redux";
import { sendMessageActionCreator, changeSendMessageActionCreator } from "../../data/messages-reducer";
import Messages from "./Messages";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



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

let AuthRedirectComponent = withAuthRedirect(Messages)
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default MessagesContainer