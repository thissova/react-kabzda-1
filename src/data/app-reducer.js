import {authMeThunkCreator} from "./auth-reducer";

let initialState = {
    initialized: false
}

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"
 const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default: {
            return state
        }
    }

}


export const setInitialized = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMeThunkCreator())
    promise.then(() => {
        dispatch(setInitialized())
    })
}
export default appReducer