const express = require('express');
const router = express.Router();
const discordController = require('./bots.controller');

router.put('/start', discordController.start);

module.exports = router;
