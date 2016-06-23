'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const webpack = require('webpack');

const api = require('./routes/api');

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const DATABASE_URL =process.env.DATABASE_URL || 'mongodb://localhost/jotter';

const app = express();

if(NODE_ENV !== 'production') {
  const config = require('./webpack.config.dev');

  var compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

mongoose.connect(DATABASE_URL);

app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(PORT, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log(`listening on port ${ PORT }`);
  }
});
