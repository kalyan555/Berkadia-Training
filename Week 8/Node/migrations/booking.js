'use strict';
exports.up = function(knex) {
  return knex.schema
    .createTable('bookings', function(table) {
      table.increments('bookingId').primary();
      table.string('username');
      table.string('truckname');
      table.string('bookingDate');
    });
};
exports.down = function(knex) {
  return knex.schema
    .dropTable('bookings');
};