'use strict';

const express = require('express');
const router = express.Router();

const Jot = require('../models/Jot');

router.post('/jot', (req, res, next) => {
  let jot = new Jot({
    content: 'test'
  });
  jot.save()
    .then((jot) => {
      res.json({success: true});
    })
    .catch((err) => {
      res.json({success: false});
    });
});

router.route('/jot/:id')
  .get((req, res, next) => {
    res.json({ success: true });
  });

module.exports = router;