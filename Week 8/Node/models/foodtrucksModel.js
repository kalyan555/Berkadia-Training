'use strict';
var bookshelf = require('../bookshelf');
var Foodtrucks = bookshelf.Model.extend({
  tableName: 'foodtruck',
});
module.exports = Foodtrucks;