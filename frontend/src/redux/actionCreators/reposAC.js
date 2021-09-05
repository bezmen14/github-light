import { GET_PROFILE_REPOS } from "../types/reposTypes";
import axios from "axios";

export function setRepos(value) {
  return {
    type: GET_PROFILE_REPOS,
    payload: value
  }
}

export const getProfileRepos = (login) => async (dispatch) => {
  const profileRepos = await axios.get(`https://api.github.com/users/${login}/repos`);
  dispatch(setRepos(profileRepos.data))
}
