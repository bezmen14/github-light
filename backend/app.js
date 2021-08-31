require('dotenv').config()
const cors = require("cors");
const { dbConnect } = require("./db/connect");
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const authRouter = require('./routes/auth.router');
const indexRouter = require('./routes/index');
const UserModel = require('./models/user.model');

const {PORT} = process.env || '3001';
const app = express();
dbConnect();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/auth', authRouter);
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log('Server has been started on PORT', PORT)
})

module.exports = app;
