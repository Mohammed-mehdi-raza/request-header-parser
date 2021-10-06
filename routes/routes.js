const { index, whoami } = require('../controllers/controller.js');
const express = require('express');
const router = express.Router();

router.get('/', index);

router.get('/api/whoami', whoami);

module.exports = router;