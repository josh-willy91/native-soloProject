
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

// import Event model to run queries
const { Event } = require('../../db/models');
const { User } = require('../../db/models');
const { Venue } = require('../../db/models');
const { Rsvp } = require('../../db/models');


router.get('/:id', asyncHandler(async(req, res) => {
    const {id} = req.params;
    const event = await Event.findByPk(id, {
        include: [User, Venue]
        // include: [{model: User, model: Venue}]
        // include: [User, Venue]
        // include: [{User, Venue}]
        // include: User, Venue
    });
    res.json(event);
}));


module.exports = router;
