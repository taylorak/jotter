'use strict';

const mongoose = require('mongoose');

const jotSchema = mongoose.Schema({
  content: String,
});

module.exports = mongoose.model('Jot', jotSchema);