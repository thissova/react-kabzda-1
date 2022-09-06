const profileReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 0,
                likesCount: 0,
                message: state.newTextPost
            }
            state.posts.push(newPost)
            state.newTextPost = '';
            return state

        case 'CHANGE-NEW-TEXT-POST':
            state.newTextPost = action.newText
            return state

        default:
            return state
    }

}

export let addPostActionCreator = () => {
    return {type: 'ADD-POST'}
}
export let changeNewTextPostActionCreator = (text) => {
    return {type: 'CHANGE-NEW-TEXT-POST', newText: text}
}
export default profileReducer