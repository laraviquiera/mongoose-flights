const Flight = require('../models/flight');

module.exports = {
    index,
    create,
    show
}

//show flight details
async function show(req, res) {
    try {
      const flight = await Flight.findById(req.params.id);
      res.render('flights/show', { flight });
    } catch (err) {
      console.error(err);
      res.render('flights/show', { errorMsg: error.message })
    }
  }

//add a destination
async function create(req, res) {
    const flightId = req.params.id;
    const { airport, arrival } = req.body;
  
    try {
      const flight = await Flight.findById(flightId);
  
      if (!flight) {
        return res.status(404).send('Flight not found');
      }
  
      flight.destinations.push({ airport, arrival });
      await flight.save();
  
      res.redirect(`/flights/${flightId}`);
    } catch (err) {
        console.error(err);
        res.render(`/flights/${flightId}`, { errorMsg: error.message })
    }
  }
  
// destination form
async function index(req, res) {
    const flightId = req.params.id;
    res.render('flights/add-destination', { flightId });
  }


