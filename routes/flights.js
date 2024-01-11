const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');


//GET index
router.get('/', flightsCtrl.index);
//GET /new
router.get('/new', flightsCtrl.new);
//POST create
router.post('/', flightsCtrl.create);


module.exports = router;