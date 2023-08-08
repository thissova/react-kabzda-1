import {usersAPI} from "../api/api"
import {updateObjectInArray} from "../utils/objectHelpers";
import {PhotosType} from "./profile-reducer";

type UserType = {
    name: string,
    id: number,
    status: string
    photos: PhotosType,
    followed: boolean
}

let initialState = {
    users: null as Array<UserType> | null,
    pageSize: 5 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    pagesInLine: 10 as number,
    followingInProgress: [] as Array<number>
}
type InitialStateType = typeof initialState
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT_PAGE = "SET_TOTAL_USERS_COUNT_PAGE"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_IS_FOLLOWING_IN_PROGRESS = "SET_IS_FOLLOWING_IN_PROGRESS"


const usersReducers = (state = initialState, action : any): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, "id", action.userId, {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, "id", action.userId, {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT_PAGE:
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default: {
            return state
        }
    }

}

type FollowUnFollowType = {
    type: typeof FOLLOW | typeof UNFOLLOW
    userId: number
}
type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT_PAGE
    usersCount: number
}
type SetIsFetchingType = {
    type: typeof SET_IS_FETCHING
    isFetching: boolean
}
type SetIsFollowingInProgressType = {
    type: typeof SET_IS_FOLLOWING_IN_PROGRESS
    followingInProgress: boolean
    userId: number
}
export const follow = (userId: number): FollowUnFollowType => ({type: FOLLOW, userId})
export const unfollow = (userId: number): FollowUnFollowType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (usersCount: number): SetTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT_PAGE, usersCount})
export const setIsFetching = (isFetching: boolean): SetIsFetchingType => ({type: SET_IS_FETCHING, isFetching})
export const setIsFollowingInProgress = (followingInProgress: boolean, userId: number): SetIsFollowingInProgressType => ({
    type: SET_IS_FOLLOWING_IN_PROGRESS,
    followingInProgress,
    userId
})
export const getUsersThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    let response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(response.data.items));
        dispatch(setTotalUsersCount(response.data.totalCount));
        dispatch(setIsFetching(false))

}

const followUnfollowFlow = async (userId: number, apiMethod: any, dispatch: any, actionCreator: any) => {
        dispatch(setIsFollowingInProgress(true, userId))
        let response = await apiMethod(userId)
            if (response.data.resultCode === 0) {
                dispatch(actionCreator(userId))
                dispatch(setIsFollowingInProgress(false, userId))
            }
}
export const followUserThunkCreator = (userId: number) =>  (dispatch: any) => {
        followUnfollowFlow(userId, usersAPI.follow, dispatch, follow)
}
export const unfollowUserThunkCreator = (userId: number) =>  (dispatch: any) => {
     followUnfollowFlow(userId, usersAPI.unfollow, dispatch, unfollow)

}

export default usersReducers