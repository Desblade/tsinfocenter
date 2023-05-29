const bcrypt = require('bcrypt');
const { db } = require('../../db');
const { createToken } = require('../../utils/createToken');

const registerController = async (req, res) => {
  try {
    const {
      name, surname, email, password,
    } = req.body;

    const user = await db('users')
      .select('id')
      .where({ email })
      .first();

    if (user) {
      return res.status(400).json({ message: 'Полльзователь с такой почтой уже существует' });
    }

    const hashPassword = await bcrypt.hash(password, 5);

    const registerUser = await db('users')
      .insert({
        name,
        surname,
        email,
        password: hashPassword,
        role: 'buyer',
      })
      .returning(['id', 'email', 'role']);

    const token = await createToken({
      id: registerUser[0].id,
      email: registerUser[0].email,
      role: registerUser[0].role,
    });

    return res.json({ token });
  } catch (e) {
    console.error(e);

    return res.status(500).json({ message: 'Регистрация безуспешна' });
  }
};

module.exports = {
  registerController,
};
