const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
}


async function newFlight(req, res) {
    res.render('flights/new', { errorMsg: '', title: 'Add A New Flight'});
}

async function create(req, res) {
    try {
        await Flight.create(req.body);
        res.redirect('/flights/new');
    } catch(err) {
        console.log(err);
        res.render('flights/new', { errorMsg: error.message, title: 'Add A New Flight' })
    }
}

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: 'All Flights', flights });
}

