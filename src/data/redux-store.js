import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducers from "./auth-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import usersReducers from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducers,
    auth: authReducers,
    form: formReducer

})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store

export default store