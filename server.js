'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const DATABASE_URL =process.env.DATABASE_URL || 'mongodb://localhost/jotter';

const api = require('./routes/api');

const app = express();

mongoose.connect(DATABASE_URL);

app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);

app.listen(PORT, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log(`listening on port ${ PORT }`);
  }
});
