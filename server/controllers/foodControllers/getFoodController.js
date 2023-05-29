const { db } = require('../../db');

const getFoodController = async (req, res) => {
  try {
    const food = await db('food').select(['id', 'title', 'cost']);

    return res.json(food);
  } catch (e) {
    console.error(e);

    return res.status(500).json({ message: 'Не удалось получить товары' });
  }
};

module.exports = {
  getFoodController,
};
