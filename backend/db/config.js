require('dotenv').config()

const options = {
  useNewUrlParser: true, 
  // useFindAndModify: false, 
  // useCreateIndex: true,  
  useUnifiedTopology: true, 
  // poolSize: 10, 
  // bufferMaxEntries: 0, 
}

const { mongoDBurl } = process.env

const dbConnectionURL = 'mongodb+srv://admin:123@cluster0.igyyo.mongodb.net/github_auth?retryWrites=true&w=majority'

module.exports = {
  dbConnectionURL,
  options,
}
