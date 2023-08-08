type DialogType = {
    id: number
    name: string

}
type MessageType = {
    id: number
    message: string

}

let initialState = {
    dialogs: [
        {id: 1, name: "Semen"},
        {id: 2, name: "Borys"},
        {id: 3, name: "Andrew"},

    ] as Array<DialogType>,
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
    ] as Array<MessageType>,
}

type InitialStateType = typeof initialState

const SEND_MESSAGE = "SEND_MESSAGE"

const messagesReducer = (state = initialState, action: any): InitialStateType => {
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

        default:
            return state
    }

}

type sendMessageActionCreatorType = {
    type: typeof SEND_MESSAGE,
    newMessageBody: string
}

export let sendMessageActionCreator = (newMessageBody: string): sendMessageActionCreatorType => {
    return {type: SEND_MESSAGE, newMessageBody}
}


export default messagesReducer