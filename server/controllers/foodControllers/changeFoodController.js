const { db } = require('../../db');

const changeFoodController = async (req, res) => {
  try {
    const { id } = req.query;
    const { title, cost } = req.body;
    const { role } = req.user;
    const update = {};

    const food = await db('food')
      .select(['id', 'title', 'cost'])
      .where({ id })
      .first();

    if (!food) {
      return res.status(404).json({ message: 'Не удалось найти товар' });
    }

    if (title) {
      if (role !== 'admin') {
        return res.status(500).json({ message: 'Не удалось изменить товар' });
      }
      update.title = title;
    }

    if (cost) {
      if (role !== 'admin') {
        return res.status(500).json({ message: 'Не удалось изменить товар' });
      }
      update.cost = cost;
    }

    const updateFood = await db('food')
      .where({ id })
      .update(update)
      .returning(['id', 'title', 'cost']);

    return res.json(updateFood);
  } catch (e) {
    console.error(e);

    return res.status(500).json({ message: 'Не удалось изменить товар' });
  }
};

module.exports = {
  changeFoodController,
};
