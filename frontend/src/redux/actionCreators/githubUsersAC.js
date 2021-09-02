import { GET_GITHUB_USERS } from "../types/githubUsersTypes";
import axios from "axios";

export function setRandom(value) {
  return {
    type: GET_GITHUB_USERS,
    payload: value
  }
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
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
  // const randomGithubUsers = await axios(`https://api.github.com/users?since=${randomInteger(1, 71730070)}&per_page=10`);
  const randomGithubUsers = await axios(`https://api.github.com/search/users?q=${randomChar(1)}&per_page=9`);
  console.log(randomGithubUsers.data.items);
  // console.log(randomGithubUsers.data);

  // dispatch(setRandom(randomGithubUsers.data))
  dispatch(setRandom(randomGithubUsers.data.items))

}

