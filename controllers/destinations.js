const Flight = require('../models/destinations');
const Flight = require('../models/flight');

module.exports = {
    destinationForm,
    addDestination,
    showFlightDetails
}

async function showFlightDetails(req, res) {
    try {
      const flight = await Flight.findById(req.params.id);
      res.render('flights/show', { flight });
    } catch (err) {
      console.error(err);
      res.render('flights/show', { errorMsg: error.message })
    }
  }

async function addDestination(req, res) {
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
  

async function destinationForm(req, res) {
    const flightId = req.params.id;
    res.render('flights/add-destination', { flightId });
  }


