const dialogsReducer = (state, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let newMessage = {
                id: 0,
                message: state.newTextMessage,
                img: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d'
            }
            state.messages.push(newMessage)
            state.newTextMessage = '';
            return state

        case 'CHANGE-NEW-TEXT-MESSAGE':
            state.newTextMessage = action.newText
            return state

        default:
            return state
    }

}
export let sendMessageActionCreator = () => {
    return {type: 'SEND-MESSAGE'}
}

export let changeSendMessageActionCreator = (text) => {
    return {type: 'CHANGE-NEW-TEXT-MESSAGE', newText: text}
}

export default dialogsReducer