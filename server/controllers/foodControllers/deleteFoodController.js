const { db } = require('../../db');

const deleteFoodController = async (req, res) => {
  try {
    const { id } = req.query;

    const food = await db('food')
      .select(['id', 'title', 'cost'])
      .where({ id })
      .first();

    if (!food) {
      return res.status(404).json({ message: 'Не удалось найти товар' });
    }

    if (req.user.role === 'admin') {
      await db('food')
        .where({ id })
        .del();

      return res.sendStatus(200);
    }
    return res.status(400).json({ message: 'Вы не имеете прав удалять товары' });
  } catch (e) {
    console.error(e);

    return res.status(500).json({ message: 'Не удалось удалить товар' });
  }
};

module.exports = {
  deleteFoodController,
};
