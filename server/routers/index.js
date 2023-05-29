const express = require('express');
const userRouter = require('./userRouter');
const foodRouter = require('./foodRouter');

const router = express.Router();

router.use('/user', userRouter);
router.use('/food', foodRouter);

module.exports = router;