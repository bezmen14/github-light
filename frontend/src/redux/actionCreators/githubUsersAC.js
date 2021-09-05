import { GET_GITHUB_USERS } from "../types/githubUsersTypes";
import axios from "axios";

export function setRandom(value) {
  return {
    type: GET_GITHUB_USERS,
    payload: value
  }
}

function randomChar(length) {
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

export const getRandomGithubUsers = () => async (dispatch) => {
  const randomGithubUsers = await axios(`https://api.github.com/search/users?q=${randomChar(1)}&per_page=10`);
  dispatch(setRandom(randomGithubUsers.data.items))
}
