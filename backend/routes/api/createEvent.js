
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

// import Event model to run queries
const { Event } = require('../../db/models')
const { User } = require('../../db/models')
const { Group } = require('../../db/models')
const { Rsvp } = require('../../db/models')

router.post('/create', asyncHandler(async(req, res) => {

}));



module.exports = router;
