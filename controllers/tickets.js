const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


module.exports = {
    new: newTicket,
    create
};


async function create(req, res) {
  const flightId = req.params.id;
  const { seat, price } = req.body;

  try {
    const flight = await Flight.findById(flightId);

    if (!flight) {
      return res.status(404).send('Flight not found');
    }

    const ticket = new Ticket({ seat, price, flight: flight._id });
    await ticket.save();

    // Add the new ticket to the flight's tickets array
    flight.tickets = flight.tickets || [];
    flight.tickets.push(ticket._id);
    await flight.save();

    res.redirect(`/flights/${flightId}`);
  } catch (err) {
    console.log(err);
    res.render('tickets/new', { errorMsg: err.message });
  }
}

async function newTicket(req, res) {
  const flightId = req.params.id;
  res.render('tickets/new', { title: 'New Ticket', flightId });
}