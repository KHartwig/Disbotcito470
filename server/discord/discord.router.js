const express = require('express');
const router = express.Router();
const discordController = require('./bots.controller');

router.put('/start', discordController.start);
router.put('/stop', discordController.stop);

router.get('/guilds/', discordController.getAllByBot);
router.get('/guilds/:gid', discordController.getById);
router.get('/guilds/:gid/member'), discordController.getMembersByGid);
router.get('/guilds/:gid/emojis'), discordController.getEmojisByGid);

//middleware
router.use('/guilds/', discordController.attachGuildObject);

module.exports = router;
