// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const landingRouter = require('./landing')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/', landingRouter);

module.exports = router;
