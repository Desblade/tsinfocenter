const express = require('express');
const { registerController } = require('../controllers/userControllers/registerController');
const { loginController } = require('../controllers/userControllers/loginController');
const { resignToken } = require('../controllers/userControllers/resignToken');
const { checkTokenMiddleware } = require('../middlewares/checkTokenMiddleware');

const router = express.Router();

router
  .post('/register', registerController)
  .post('/login', loginController)
  .get('/checkToken', checkTokenMiddleware, resignToken);

module.exports = router;
