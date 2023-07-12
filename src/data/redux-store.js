import {combineReducers} from "redux";
import authReducers from "./auth-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import usersReducers from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";
import {configureStore} from "@reduxjs/toolkit";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducers,
    auth: authReducers,
    app: appReducer,
    form: formReducer

})

let store = configureStore({reducer: reducers, middleware: [thunkMiddleware]})
window.store = store

export default store