const bcrypt = require('bcrypt');

exports.up = async (knex) => knex('users').insert({
  name: 'admin',
  surname: 'adminov',
  email: 'adminAdminovih@mail.ru',
  password: await bcrypt.hash('someSecretPassword123', 5),
  role: 'admin',
});

exports.down = (knex) => knex.raw('DELETE FROM users WHERE id = ?', [1]);
