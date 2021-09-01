import { GET_PROFILE } from "../types/profileTypes";


const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILE:

        return {
          ...state,
          ...action.payload,
        }
      

    default:
      return state
  }
}

export default profileReducer;
