import { GET_PROFILE_CONTRIBUTIONS } from "../types/contributionsTypes";

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
  try {
    const contributions = data.data.user.contributionsCollection.contributionCalendar.weeks.map((el) => el.contributionDays.reduce((a, b) => a + b.contributionCount, 0));
    dispatch(setContributions(contributions))
  } catch (error) {
    console.log('error');
  }
}



