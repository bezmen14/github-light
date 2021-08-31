require('dotenv').config()
const cors = require("cors");
const { dbConnect } = require("./db/connect");
const express = require('express');
const path = require('path');
const logger = require('morgan');

const authRouter = require('./routes/auth.router');

const {PORT} = process.env || '3001';
const app = express();
dbConnect();

app.set('views', path.join(__dirname, 'views'));

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/auth', authRouter);

app.listen(PORT, () => {
  console.log('Server has been started on PORT', PORT)
})

