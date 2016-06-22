'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, _ => {
  console.log(`listening on port ${ PORT }`);
});
