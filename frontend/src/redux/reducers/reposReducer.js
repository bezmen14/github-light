import { GET_PROFILE_REPOS } from "../types/reposTypes";

function reposReducer(state = [], action) {
  switch (action.type) {
    case GET_PROFILE_REPOS:
      return action.payload;

    default:
      return state;
  }
}

export default reposReducer;
