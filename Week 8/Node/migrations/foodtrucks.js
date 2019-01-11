'use strict';
exports.up = function(knex) {
  return knex.schema
    .createTable('foodtruck', function(table) {
      table.increments('foodtruckId').primary();
      table.string('foodtruckName');
      table.string('foodtruckArea');
      table.string('foodtruckImage');
      table.string('foodtruckServes');
    });
};
exports.down = function(knex) {
  return knex.schema
    .dropTable('foodtruck');
};