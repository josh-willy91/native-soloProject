
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

// import Event model to run queries
const { Event } = require('../../db/models')


router.get('/', asyncHandler(async(req, res) => {
    const events = await Event.findAll();
    res.json(events);
}));


module.exports = router;
