const express = require('express');
const router = express.Router();
const discordRouter = express.Router();
const discordController = require('./discord.controller');

/// - /bots/:id/discord
router.put('/start', discordController.start);
router.put('/stop', discordController.stop);

router.get('/guilds/', discordController.getAllGuildsByBot);
router.use('/guilds/:gid', discordController.attachGuildObject); //middleware
router.get('/guilds/:gid', discordController.getById);
router.get('/guilds/:gid/members', discordController.getMembersByGuild);
router.get('/guilds/:gid/emojis', discordController.getEmojisByGuild);

// - /discord/
discordRouter.get('/validate', discordController.validateToken);

module.exports = {
    'nestedRouter': router,
    'baseRouter': discordRouter
};
