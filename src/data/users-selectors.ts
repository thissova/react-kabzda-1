import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users
})
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
 export const getPagesInLine = (state: AppStateType) => {
    return state.usersPage.pagesInLine
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}
