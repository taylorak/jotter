'use strict';

const express = require('express');
const router = express.Router();

router.route('/jot/:id')
  .get((req, res, next) => {
    res.json({ success: true });
  });

module.exports = router;