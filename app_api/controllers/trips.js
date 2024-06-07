const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // register model
const Model = mongoose.model('trips');

// Get: /trips - list all the trips
// Regardless of outcome, response must include HTLM status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

        //console.log(q);

    if(!q)
        {
            return res
                    .status(404)
                    .json(err);
        } else {
            return res
                .status(200)
                .json(q);
        }
};

// Get: /trips/:tripCode - list a single trip
// Regardless of outcome, response must include HTLM status code
// and JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) // Return single record
        .exec();

        console.log(q);

    if(!q)
        {
            return res
                    .status(404)
                    .json(err);
        } else {
            return res
                .status(200)
                .json(q);
        }
};

module.exports = {
    tripsList,
    tripsFindByCode
};