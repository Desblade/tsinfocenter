const { data } = require('../utils/data');

exports.up = async (knex) => knex('food').insert(data);

exports.down = (knex) => knex.raw('DELETE FROM food');
