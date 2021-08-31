import { SET_USER, REMOVE_USER } from "../types/userTypes";


const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      if (action.payload.user) {
        return {
          ...state,
          ...action.payload.user,
        }
      }
      case REMOVE_USER:
      localStorage.removeItem('name');
      return {
        ...state,
      }

    default:
      return state
  }
}

export default userReducer
