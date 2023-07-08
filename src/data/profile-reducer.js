import {profileAPI} from "../api/api";

let initialState = {
    posts: [
        {id: 0, likesCount: 1, message: 'Good morning'},
        {id: 0, likesCount: 73, message: "It's my first post"}
    ],
    newTextPost: '1f689808-b4f6-458e-b6ce-28ecaf3a4c6a',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [{id: 0, likesCount: 0, message: action.message}, ...state.posts],
                newTextPost: ''
            }
        case 'CHANGE-NEW-TEXT-POST':
            return {
                ...state,
                newTextPost: action.newText
            }
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            }

        default: {
            return state
        }
    }

}

export let addPostActionCreator = (message) => ({type: 'ADD-POST', message})
export let changeNewTextPostActionCreator = (text) => ({type: 'CHANGE-NEW-TEXT-POST', newText: text})
export let setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile})
export let setStatus = (status) => ({type: 'SET_STATUS', status})
export const getUserProfileThunkCreator = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
}
export const setStatusThunkCreator = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(() => {
        dispatch(setStatus(status))
    })
}
export const getStatusThunkCreator = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}

export default profileReducer