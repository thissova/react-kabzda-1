let initialState = {
    posts: [
        { id: 0, likesCount: 1, message: 'Good morning' },
        { id: 0, likesCount: 73, message: "It's my first post" }
    ],
    newTextPost: '1f689808-b4f6-458e-b6ce-28ecaf3a4c6a',
    profile: null
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
        case 'SET_USER_PROFILE':
            return{
                ...state,
                profile: action.profile
            }
        default:{
            return state
    }}

}

export let addPostActionCreator = () => ({type: 'ADD-POST'})
export let changeNewTextPostActionCreator = (text) => ({type: 'CHANGE-NEW-TEXT-POST', newText: text})
export let setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile})
export default profileReducer