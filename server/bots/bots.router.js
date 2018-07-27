const express = require('express');
const router = express.Router();
const botsController = require('./bots.controller');
const usersController = require('../users/users.controller');
const commandsRouter = require('../commands/commands.router');
// const discordRouter = require('../discord/discord.router');

// Middleware for user
router.use('/', usersController.attachSessionUser); // Attaches req.sessionUser

// Routes
router.post('/add', botsController.add);
// router.get('/all', botsController.getAll);
router.get('/', botsController.getAllByUser);

// BotId Routes - Attach the bot to req before performing action
router.use('/:id', botsController.attachBot); // Middleware -> req.bot
router.use('/:id/commands', commandsRouter); // Nested Route
// router.use('/:id/discord', discordRouter); // Nested Route
router.get('/:id', botsController.getById);
router.put('/:id', botsController.update);
router.delete('/:id', botsController.delete);
router.put('/:id/start', botsController.toggleStatus);
router.put('/:id/stop', botsController.toggleStatus);

module.exports = router;
