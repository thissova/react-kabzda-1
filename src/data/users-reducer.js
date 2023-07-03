let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    pagesInLine: 5,
    multiplier: 0,
}

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET_TOTAL_USERS_COUNT_PAGE':
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case 'SET_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'SET_MULTIPLIER_BIGGER':
            if (state.multiplier >= 0){
                return {
                    ...state,
                    multiplier: state.multiplier + action.multiplier
                }
            }
        case 'SET_MULTIPLIER_SMALLER':
            if (state.multiplier != 0){
                return {
                    ...state,
                    multiplier: state.multiplier - action.multiplier
                }
            }
        default: {
            return state
        }
    }

}


export const follow = (userId) => ({ type: 'FOLLOW', userId })
export const unfollow = (userId) => ({ type: 'UNFOLLOW', userId })
export const setUsers = (users) => ({ type: 'SET_USERS', users })
export const setCurrentPage = (currentPage) => ({ type: 'SET_CURRENT_PAGE', currentPage })
export const setTotalUsersCount = (usersCount) => ({ type: 'SET_TOTAL_USERS_COUNT_PAGE', usersCount })
export const setIsFetching = (isFetching) => ({ type: 'SET_IS_FETCHING', isFetching })
export const setMultiplierBigger = (multiplier) => ({ type: 'SET_MULTIPLIER_BIGGER', multiplier })
export const setMultiplierSmaller = (multiplier) => ({ type: 'SET_MULTIPLIER_SMALLER', multiplier })

export default usersReducers