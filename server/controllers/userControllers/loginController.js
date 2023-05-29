const bcrypt = require('bcrypt');
const { db } = require('../../db');
const { createToken } = require('../../utils/createToken');

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await db('users')
      .select(['id', 'email', 'password', 'role'])
      .where({ email })
      .first();

    if (!user) {
      return res.status(400).json({ message: 'Неверный логин или пароль' });
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) {
      return res.status(400).json({ message: 'Неверный логин или пароль' });
    }

    const token = await createToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return res.json({ token });
  } catch (e) {
    console.error(e);

    return res.status(500).json({ message: 'Не удалось авторизоваться' });
  }
};

module.exports = {
  loginController,
};
