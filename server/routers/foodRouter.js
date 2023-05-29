const express = require('express');
const { checkTokenMiddleware } = require('../middlewares/checkTokenMiddleware');
const { addFoodController } = require('../controllers/foodControllers/addFoodController');
const { getFoodController } = require('../controllers/foodControllers/getFoodController');
const { changeFoodController } = require('../controllers/foodControllers/changeFoodController');
const { deleteFoodController } = require('../controllers/foodControllers/deleteFoodController');

const router = express.Router();

router
  .route('/')
  .post(checkTokenMiddleware, addFoodController)
  .get(getFoodController)
  .patch(checkTokenMiddleware, changeFoodController)
  .delete(checkTokenMiddleware, deleteFoodController);

module.exports = router;
