import {createSelector} from "reselect";

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getUsersSelector = (state) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => u)
})
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
 export const getPagesInLine = (state) => {
    return state.usersPage.pagesInLine
}
export const getMultiplier = (state) => {
    return state.usersPage.multiplier
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
