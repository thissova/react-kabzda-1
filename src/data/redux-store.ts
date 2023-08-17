import {combineReducers} from "redux";
import authReducers from "./auth-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import usersReducers from "./users-reducer";
import account from "./account";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";
import {configureStore} from "@reduxjs/toolkit";

let rootReducer = combineReducers({
    account: account,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducers,
    auth: authReducers,
    app: appReducer,
    form: formReducer
})

type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>

let store = configureStore({reducer: rootReducer, middleware: [thunkMiddleware]})

export default store