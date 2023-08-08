import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

type PostType = {
    id: number,
    likesCount: number,
    message: string
}
type ContactsType = {
    github: string
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}
export type PhotosType = {
    small: string | null,
    large: string | null
}
type ProfileType = {
    userId: number,
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
let initialState = {
    posts: [
        {id: 1, likesCount: 1, message: 'Good morning'},
        {id: 0, likesCount: 73, message: "It's my first post"}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ""
}

type InitialStateType = typeof initialState

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SET_PHOTO = 'SET_PHOTO'

const profileReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{id: 0, likesCount: 0, message: action.message}, ...state.posts],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
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
type AddPostActionCreatorType = {
    type: typeof ADD_POST,
    message: string
}
type DeletePostActionCreatorType = {
    type: typeof DELETE_POST,
    postId: number
}
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
type SetUserPhotoType = {
    type: typeof SET_PHOTO,
    photos: PhotosType
}
type SetStatusType = {
    type: typeof SET_STATUS,
    status: string
}

export let addPostActionCreator = (message: string): AddPostActionCreatorType => ({type: ADD_POST, message})
export let deletePostActionCreator = (postId: number): DeletePostActionCreatorType => ({type: DELETE_POST, postId})
export let setUserProfile = (profile: ProfileType): SetUserProfileType  => ({type: SET_USER_PROFILE, profile})
export let setUserPhoto = (photos: PhotosType): SetUserPhotoType => ({type: SET_PHOTO, photos})
export let setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status})
export const getUserProfileThunkCreator = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(response.data))

}
export const setStatusThunkCreator = (status: string) => async (dispatch: any) => {
    await profileAPI.updateStatus(status)
    dispatch(setStatus(status))
}
export const getStatusThunkCreator = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))

}
export const setPhotoThunkCreator = (photo: any) => async (dispatch: any) => {
    let response = await profileAPI.setPhoto(photo)
    dispatch(setUserPhoto(response.data.data.photos))

}

export const saveProfileThunkCreator = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    let userId = getState().auth.id
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfileThunkCreator(userId))
    } else {
        dispatch(stopSubmit("DescriptionForm", {_error : response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer