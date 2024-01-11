const Flight = require('../models/flight');

module.exports = {
    index,
    create,
    show
}

//show flight details
async function show(req, res) {
    try {
      const flight = await Flight.findById(req.params.id).populate('destinations');
      res.render('flights/show', { flight, title: 'Flight Details' });
    } catch (err) {
      console.error(err);
      res.render('flights/show', { errorMsg: err.message })
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
  
      res.render('destinations/index', { title: 'Flight Destinations', flightId });
    } catch (err) {
      console.error(err);
      res.render('destinations/index', { errorMsg: err.message, flightId });
    }
  }
  
// destination form
async function index(req, res) {
    const flightId = req.params.id;
    res.render('flights/add-destination', { title: 'Add A Destination', flightId });
  }


