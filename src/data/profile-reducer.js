import {profileAPI} from "../api/api";

let initialState = {
    posts: [
        {id: 1, likesCount: 1, message: 'Good morning'},
        {id: 0, likesCount: 73, message: "It's my first post"}
    ],
    profile: null,
    status: ""
}
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SET_PHOTO = 'SET_PHOTO'

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{id: 0, likesCount: 0, message: action.message}, ...state.posts],
                newTextPost: ''
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }

        default: {
            return state
        }
    }

}

export let addPostActionCreator = (message) => ({type: ADD_POST, message})
export let deletePostActionCreator = (postId) => ({type: DELETE_POST, postId})
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export let setUserPhoto = (photos) => ({type: SET_PHOTO, photos})
export let setStatus = (status) => ({type: SET_STATUS, status})
export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(response.data))

}
export const setStatusThunkCreator = (status) => async (dispatch) => {
    await profileAPI.updateStatus(status)
    dispatch(setStatus(status))
}
export const getStatusThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))

}
export const setPhotoThunkCreator = (photo) => async (dispatch) => {
    let response = await profileAPI.setPhoto(photo)
    debugger
    dispatch(setUserPhoto(response.data.data.photos))

}

export default profileReducer