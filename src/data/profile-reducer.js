let initialState = {
    posts: [
        { id: 0, likesCount: 1, message: 'Good morning' },
        { id: 0, likesCount: 73, message: "It's my first post" }
    ],
    newTextPost: 'time to programming'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [{id:0, likesCount: 0, message: state.newTextPost},...state.posts],
                newTextPost: ''
            }
        case 'CHANGE-NEW-TEXT-POST':
            return {
                ...state, 
                newTextPost: action.newText
            }
        default:{
            return state
    }}

}

export let addPostActionCreator = () => {
    return {type: 'ADD-POST'}
}
export let changeNewTextPostActionCreator = (text) => {
    return {type: 'CHANGE-NEW-TEXT-POST', newText: text}
}
export default profileReducer