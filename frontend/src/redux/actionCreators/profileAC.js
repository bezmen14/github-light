import { GET_PROFILE } from "../types/profileTypes";
import axios from "axios";

export function setProfile(value) {
  return {
    type: GET_PROFILE,
    payload: value
  }
}

export const getProfile = (login) => async (dispatch) => {
  const profile = await axios.get(`https://api.github.com/users/${login}`);
  console.log(profile.data);
  dispatch(setProfile(profile.data))   
}

