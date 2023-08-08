import {authMeThunkCreator} from "./auth-reducer";

let initialState = {
    initialized: false
}

type InitialStateType = typeof initialState

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"
 const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default: {
            return state
        }
    }

}

type SetInitializedType = {
    type: typeof INITIALIZED_SUCCESS
}

export const setInitialized = (): SetInitializedType => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(authMeThunkCreator())
    promise.then(() => {
        dispatch(setInitialized())
    })
}
export default appReducer