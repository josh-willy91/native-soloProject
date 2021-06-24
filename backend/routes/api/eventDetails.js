
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

// import Event model to run queries
const { Event } = require('../../db/models');
const { User } = require('../../db/models');
const { Venue } = require('../../db/models');


router.get('/:id', asyncHandler(async(req, res) => {
    const {id} = req.params;
    const event = await Event.findByPk(id, {
        include: [User, Venue, 'attendees']
    });
    res.json(event);
}));

router.put('/:id', async(req, res) => {
    const id = req.body[0];
    const user = req.body[1];
    const addAttendee = await Event.update({attendees: user,
        where: id});

    res.json(addAttendee)
});

module.exports = router;
