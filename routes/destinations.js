const express = require('express');
const router = express.Router();
const destinatonsCtrl = require('../controllers/destinations');

router.get('/:id', destinationsCtrl.show);
router.get('/:id/add-destination', destinatonsCtrl.index);
router.post('/:id/add-destination', destinatonsCtrl.create);

module.exports = router;