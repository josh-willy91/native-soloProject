
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

// import Event model to run queries
const { Event } = require('../../db/models')
const { User } = require('../../db/models')
const { Group } = require('../../db/models')
const { Rsvp } = require('../../db/models')

router.post('/event', asyncHandler(async(req, res) => {
    console.log(req, '============================')
    const username = req.body.username;
    const email = req.body.payload;
    const password = req.body;
    console.log(username, email, password, '============================')

    // const newEvent = await Event.create({
    //     username: username,
    //     email: email,
    //     password: password,
    // });

    res.json({'test': 'test'});
}));


// router.post('/group', asyncHandler(async(req, res) => {

// }));

module.exports = router;
