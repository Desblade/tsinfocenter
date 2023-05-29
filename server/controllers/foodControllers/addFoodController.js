const { db } = require('../../db');

const addFoodController = async (req, res) => {
  try {
    const { title, cost } = req.body;

    if (req.user.role !== 'admin') {
      return res.status(400).json({ message: 'Вы не можете добавлять новые товары' });
    }

    const food = await db('food')
      .insert({
        title,
        cost,
      })
      .returning(['id', 'title', 'cost']);

    return res.json(food[0]);
  } catch (e) {
    console.error(e);

    return res.status(500).json({ message: 'Не удалось добавить новые товары' });
  }
};

module.exports = {
  addFoodController,
};
