const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.get('/:id', flightsCtrl.showFlightDetails);
router.get('/:id/add-destination', flightsCtrl.destinationForm);
router.post('/:id/add-destination', flightsCtrl.addDestination);

module.exports = router;