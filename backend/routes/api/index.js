// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const landingRouter = require('./landing');
const userProfileRouter = require('./userProfile');
const eventDetailRouter = require('./eventDetails');
const createEventRouter = require('./createEvent');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/', landingRouter);
router.use('/userProfile', userProfileRouter);
router.use('/event', eventDetailRouter);
router.use('/eventForm', createEventRouter);


module.exports = router;
