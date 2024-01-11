const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

router.get('/:id', destinationsCtrl.show);
router.get('/:id/add-destination', destinationsCtrl.index);
router.post('/:id/add-destination', destinationsCtrl.create);

module.exports = router;