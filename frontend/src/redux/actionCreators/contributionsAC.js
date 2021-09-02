import { GET_PROFILE_CONTRIBUTIONS } from "../types/contributionsTypes";
import axios from "axios";

export function setContributions(value) {
  return {
    type: GET_PROFILE_CONTRIBUTIONS,
    payload: value
  }
}

export const getContributions = (login) => async (dispatch) => {
  const headers = {
    'Authorization': `bearer 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`,
  }

  const body = {
    "query": `query {
          user(login: "${login}") {
            name
            contributionsCollection {
              contributionCalendar {
                colors
                totalContributions
                weeks {
                  contributionDays {
                    color
                    contributionCount
                    date
                    weekday
                  }
                  firstDay
                }
              }
            }
          }
        }`
  }

  const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
  const data = await response.json()
  const contributions = data.data.user.contributionsCollection.contributionCalendar.weeks.map((el) => el.contributionDays.reduce((a, b) => a + b.contributionCount, 0));
  console.log(contributions);
  dispatch(setContributions(contributions))
}



