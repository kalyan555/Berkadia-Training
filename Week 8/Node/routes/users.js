'use strict';
var express = require('express');
var Users = require('../models/usersModel');
var router = express.Router();
router.route('/')
  .get(function(req, res) {
    Users
      .fetchAll()
      .then(function(users) {
        res.json({ users });
      });
  });

router.route('/:username/:password')
  .get(function(req, res) {
    Users
      .where({
        username: req.params.username,
        password: req.params.password
        })
      .fetchAll()
      .then(function(users) {
        res.json({ users });
      });
  });


module.exports = router;