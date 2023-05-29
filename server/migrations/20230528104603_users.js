exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.increments('id');
  table.string('name').notNullable();
  table.string('surname').notNullable();
  table.string('email').notNullable().unique();
  table.string('password').notNullable();
  table.enum('role', ['admin', 'buyer']);
});

exports.down = (knex) => knex.schema.dropTable('users');
