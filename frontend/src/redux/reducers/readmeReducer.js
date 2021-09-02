import { GET_REPOS_README } from "../types/readmeTypes";

const readmeReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_REPOS_README:

        return {
          ...state,
          ...action.payload,
        }
      
    default:
      return state
  }
}

export default readmeReducer;
