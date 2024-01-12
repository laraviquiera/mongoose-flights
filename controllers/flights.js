const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}


async function show(req, res) {
    try {
      // Find the flight by ID
      const flightId = req.params.id;
      const flight = await Flight.findById(flightId);
  
      if (!flight) {
        return res.status(404).send('Flight not found');
      }
  
      // Find all tickets for the current flight
      const tickets = await Ticket.find({ flight: flight._id });
  
      // Pass both flight and tickets to the view
      res.render('flights/show', { title: 'Flight Details', flight, tickets });
    } catch (err) {
        console.error(err);
        res.render('tickets/new', { errorMsg: err.message });
    }
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
        res.render('flights/new', { errorMsg: err.message, title: 'Add A New Flight' })
    }
}

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: 'All Flights', flights });
}