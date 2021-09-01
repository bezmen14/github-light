import { GET_GITHUB_USERS } from "../types/githubUsersTypes";

function githubUsersReducer(state = [], action) {

  switch (action.type) {
    case GET_GITHUB_USERS:
      return action.payload;

    default:
      return state;
  }
}

export default githubUsersReducer;
