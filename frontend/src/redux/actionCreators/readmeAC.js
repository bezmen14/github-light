import { GET_REPOS_README } from "../types/readmeTypes";
import axios from "axios";

export function setReadme(value) {
  return {
    type: GET_REPOS_README,
    payload: value
  }
}

export const getReadme = (login, repository) => async (dispatch) => {
  const readme = await axios.get(`https://api.github.com/repos/${login}/${repository}/readme`);
  console.log(readme.data);
  dispatch(setReadme(readme.data))   
}
