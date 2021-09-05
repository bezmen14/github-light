import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import githubUsersReducer from '../reducers/githubUsersReducer'
import userReducer from "../reducers/userReducer";
import profileReducer from "../reducers/profileReducer";
import reposReducer from "../reducers/reposReducer";
import readmeReducer from "../reducers/readmeReducer";
import contributionsReducer from "../reducers/contributionsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  githubUsers: githubUsersReducer,
  profile: profileReducer,
  repos: reposReducer,
  readme: readmeReducer,
  contributions: contributionsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
