const express = require('express');
const router = express.Router();
const discordController = require('./discord.controller');

router.put('/start', discordController.start);
router.put('/stop', discordController.stop);



router.get('/guilds/', discordController.getAllGuildsByBot);
router.use('/guilds/:gid', discordController.attachGuildObject); //middleware
router.get('/guilds/:gid', discordController.getById);
router.get('/guilds/:gid/members', discordController.getMembersByGuild);
router.get('/guilds/:gid/emojis', discordController.getEmojisByGuild);


module.exports = router;
