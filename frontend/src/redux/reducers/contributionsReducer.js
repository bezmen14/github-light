import { GET_PROFILE_CONTRIBUTIONS } from "../types/contributionsTypes";

function contributionsReducer(state = [], action) {
  switch (action.type) {
    case GET_PROFILE_CONTRIBUTIONS:
      return action.payload;

    default:
      return state;
  }
}

export default contributionsReducer;
