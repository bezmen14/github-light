require('dotenv').config()

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const { mongoDBurl } = process.env
const dbConnectionURL = 'mongodb+srv://admin:123@cluster0.igyyo.mongodb.net/github_auth?retryWrites=true&w=majority'

module.exports = {
  dbConnectionURL,
  options,
}
