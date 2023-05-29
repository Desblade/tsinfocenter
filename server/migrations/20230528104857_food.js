exports.up = (knex) => knex.schema.createTable('food', (table) => {
  table.increments('id');
  table.string('title').notNullable();
  table.integer('cost').notNullable();
});

exports.down = (knex) => knex.schema.dropTable('food');