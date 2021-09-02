import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import githubUsersReducer from '../reducers/githubUsersReducer'
import userReducer from "../reducers/userReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from "../reducers/profileReducer";
import reposReducer from "../reducers/reposReducer";
import readmeReducer from "../reducers/readmeReducer";


const rootReducer = combineReducers({
    user: userReducer,
    githubUsers: githubUsersReducer,
    profile: profileReducer,
    repos: reposReducer,
    readme: readmeReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
