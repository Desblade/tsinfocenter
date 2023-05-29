const { db } = require('../db');
const { verifyToken } = require('../utils/verifyToken');

const checkTokenMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    try {
      const { email } = await verifyToken(token);

      req.user = await db('users')
        .select(['id', 'email', 'role'])
        .where({ email })
        .first();

      return next();
    } catch (e) {
      console.error(e);

      return res.status(401).json({ message: 'Не авторизован' });
    }
  }
  return res.status(401).json({ message: 'Не авторизован' });
};

module.exports = {
  checkTokenMiddleware,
};
