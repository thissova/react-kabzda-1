let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 0, likesCount: 1, message: 'Good morning' },
                { id: 0, likesCount: 73, message: "It's my first post" }
            ],
            newTextPost: ''
        },

        messagesPage: {
            dialogs: [
                { id: 1, name: "Semen", img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/96be2232163929.567197ac6fb64.png' },
                { id: 2, name: "Borya", img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png' },
                { id: 3, name: "Andrew", img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b3053232163929.567197ac6e6f5.png' },

            ],
            messages: [
                { id: 1, message: 'Hi', img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/96be2232163929.567197ac6fb64.png' },
                { id: 0, message: 'Hi', img: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d' },
                { id: 1, message: 'How are you?', img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/96be2232163929.567197ac6fb64.png' },
                { id: 0, message: "I'm good and you", img: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d' },
                { id: 1, message: 'I\'m too', img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/96be2232163929.567197ac6fb64.png' },
            ],
        }
    },
    getState() {

        return this._state
    },
    _rerenderEntireTree() { },
    setRerenderEntireTree(observer) {
        this._rerenderEntireTree = observer
    },
    dispatch(action) {

        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 0,
                likesCount: 0,
                message: this._state.profilePage.newTextPost
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newTextPost = '';
            this._rerenderEntireTree()
        }


        else if (action.type === 'CHANGE-NEW-TEXT-POST') {
            this._state.profilePage.newTextPost = action.newText
            this._rerenderEntireTree();
        }
    }
}



window.store = store

export let addPostActionCreator = () => {
    return {type: 'ADD-POST'}
}

export let changeNewTextPostActionCreator = (text) => {
    return {type: 'CHANGE-NEW-TEXT-POST', newText:text}
}
export default store