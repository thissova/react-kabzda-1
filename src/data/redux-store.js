import { combineReducers, createStore } from "redux";
import authReducers from "./auth-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import usersReducers from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducers,
    auth: authReducers
})

let store = createStore(reducers);

export default store