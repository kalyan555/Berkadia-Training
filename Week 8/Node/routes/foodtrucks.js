'use strict';
var express = require('express');
var Foodtrucks = require('../models/foodtrucksModel');
var router = express.Router();
router.route('/')
  .get(function(req, res) {
    Foodtrucks
      .fetchAll()
      .then(function(users) {
        res.json({ users });
      });
  });

router.route('/:id')
  .get(function(req, res) {
    Foodtrucks
      .where({
        foodtruckId: req.params.id,
        })
      .fetchAll()
      .then(function(foodtrucks) {
        res.json({ foodtrucks });
      });
  });


module.exports = router;