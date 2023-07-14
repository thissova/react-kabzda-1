import {usersAPI} from "../api/api"
import {updateObjectInArray} from "../utils/objectHelpers";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    pagesInLine: 5,
    multiplier: 0,
    followingInProgress: []
}
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT_PAGE = "SET_TOTAL_USERS_COUNT_PAGE"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_IS_FOLLOWING_IN_PROGRESS = "SET_IS_FOLLOWING_IN_PROGRESS"
const SET_MULTIPLIER_BIGGER = "SET_MULTIPLIER_BIGGER"
const SET_MULTIPLIER_SMALLER = "SET_MULTIPLIER_SMALLER"


const usersReducers = (state = initialState, action) => {
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
        case SET_MULTIPLIER_BIGGER:
            if (state.multiplier >= 0) {
                return {
                    ...state,
                    multiplier: state.multiplier + action.multiplier
                }
            }
            break
        case SET_MULTIPLIER_SMALLER:
            if (state.multiplier !== 0) {
                return {
                    ...state,
                    multiplier: state.multiplier - action.multiplier
                }
            }
            break
        default: {
            return state
        }
    }

}


export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_USERS_COUNT_PAGE, usersCount})
export const setMultiplierBigger = (multiplier) => ({type: SET_MULTIPLIER_BIGGER, multiplier})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})
export const setIsFollowingInProgress = (followingInProgress, userId) => ({
    type: SET_IS_FOLLOWING_IN_PROGRESS,
    followingInProgress,
    userId
})
export const setMultiplierSmaller = (multiplier) => ({type: SET_MULTIPLIER_SMALLER, multiplier})

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    let response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(response.data.items));
        dispatch(setTotalUsersCount(response.data.totalCount));
        dispatch(setIsFetching(false))

}

const followUnfollowFlow = async (userId, apiMethod, dispatch, actionCreator) => {
        dispatch(setIsFollowingInProgress(true, userId))
        let response = await apiMethod(userId)
            if (response.data.resultCode === 0) {
                dispatch(actionCreator(userId))
                dispatch(setIsFollowingInProgress(false, userId))
            }
}
export const followUserThunkCreator = (userId) =>  (dispatch) => {
        followUnfollowFlow(userId, usersAPI.follow, dispatch, follow)
}
export const unfollowUserThunkCreator = (userId) =>  (dispatch) => {
     followUnfollowFlow(userId, usersAPI.unfollow, dispatch, unfollow)

}

export default usersReducers