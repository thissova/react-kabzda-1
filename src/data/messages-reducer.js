let initialState = {
    dialogs: [
        { id: 1, name: "Semen", img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/96be2232163929.567197ac6fb64.png' },
        { id: 2, name: "Borya", img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png' },
        { id: 3, name: "Andrew", img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b3053232163929.567197ac6e6f5.png' },

    ],
    messages: [
        {
            id: 1,
            message: 'Hi',
        },
        {
            id: 0,
            message: 'Hi',
        },
        {
            id: 1,
            message: 'How are you?',
        },
        {
            id: 0,
            message: "I'm good and you",
        },
        {
            id: 1,
            message: 'I\'m too',
        },
    ],
}

const SEND_MESSAGE = "SEND_MESSAGE"
const CHANGE_NEW_TEXT_MESSAGE = "'CHANGE-NEW-TEXT-MESSAGE'"
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state, 
                messages: [
                    ...state.messages, 
                    {
                    id: 0,
                    message: body,
                    }
                ]
            }

        case CHANGE_NEW_TEXT_MESSAGE:
            return {
                ...state,
                newTextMessage: action.newText
            }

        default:
            return state
    }

}
export let sendMessageActionCreator = (newMessageBody) => {
    return {type: SEND_MESSAGE, newMessageBody}
}

export let changeSendMessageActionCreator = (text) => {
    return {type: CHANGE_NEW_TEXT_MESSAGE, newText: text}
}

export default messagesReducer