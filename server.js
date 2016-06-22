'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const api = require('./routes/api');

const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);

app.listen(PORT, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log(`listening on port ${ PORT }`);
  }
});
