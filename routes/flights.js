const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');


//GET /index
router.get('/', flightsCtrl.index);
//GET /new
router.get('/new', flightsCtrl.new);
//GET /show
router.get('/:id', flightsCtrl.show);
//POST create
router.post('/', flightsCtrl.create);


module.exports = router;