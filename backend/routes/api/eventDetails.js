
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
        include: [User, Venue, 'attendees']
    });
    res.json(event);
}));

router.put('/:id', async(req, res) => {
    const eventId = parseInt(req.body[0]);
    const userId = req.body[1];
    const addAttendee = await Rsvp.create({eventId, userId});

    res.json(addAttendee)
});

router.delete('/:id',  async(req, res) => {
    // console.log(req, 'ljkandlfnldefkmn')
    const {id} = req.params;
    // const {hostid} = req.body;
    const findEvent = await Event.findByPk(id);
    const findRsvp = await Rsvp.findAll({where: {id}});
    await findRsvp.forEach((rsvp) => {
        rsvp.destroy();
    });
    await findEvent.destroy();

    return res.json(id)
});

module.exports = router;
