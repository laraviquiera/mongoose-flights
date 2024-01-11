const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
    // show
}

// async function show(req, res) {
//     try {
//       const flight = await Flight.findById(req.params.id).populate('destinations');
//       res.render('flights/show', { flight });
//     } catch (err) {
//       console.error(err);
//       res.render('flights/show', { errorMsg: error.message })
//     }
//   }

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

