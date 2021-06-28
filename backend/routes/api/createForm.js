
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

// import Event model to run queries
const { Event } = require('../../db/models')
const { User } = require('../../db/models')
const { Group } = require('../../db/models')
const { Rsvp } = require('../../db/models')
const { Venue } = require('../../db/models')

router.post('/event', asyncHandler(async(req, res) => {
    const event = req.body.event;
    const venue = req.body.venue;
    const group = req.body.group;

    const venueName = venue.venueName;
    const address = venue.address;
    const city = venue.city;
    const state = venue.state;
    const zipCode = venue.zipCode;
    const lat = venue.lat;
    const lon = venue.lon;

    const newVenue = await Venue.create({
        name: venueName,
        address,
        city,
        state,
        zipCode,
        lat,
        lon,
    });

    const type = group.type;

    const newGroup = await Group.create({
        type,
    });

    const hostId = event.hostId;
    const name = event.name;
    const details = event.details;
    const date = event.date;
    const time = event.time;
    const capacity = event.capacity;

    const newEvent = await Event.create({
        hostId,
        venueId: newVenue.id,
        categoryId: newGroup.id,
        name,
        details,
        date,
        time,
        capacity,
    })

    console.log(hostId, event, '=================')

    res.json({'test': 'test'});
}));


module.exports = router;
