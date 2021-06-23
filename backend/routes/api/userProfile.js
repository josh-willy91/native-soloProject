
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

// import Event model to run queries
const { Event } = require('../../db/models')


router.get('/:id', asyncHandler(async(req, res) => {
    const id = req.params.id;
    const events = await Event.findAll({where: {
        hostId: id
    }});
    res.json(events);
}));


module.exports = router;
