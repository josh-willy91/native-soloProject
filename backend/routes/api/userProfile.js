
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

// import Event model to run queries
const { Event } = require('../../db/models')


// router.get('/:id', asyncHandler(async(req, res) => {
//     const id = req.params.id;
//     const profile = await Event.findAll({where: {
//         hostId: id
//     }});
//     res.json(profile);
// }));


module.exports = router;
