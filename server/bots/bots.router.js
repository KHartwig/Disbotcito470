const express = require('express');
const router = express.Router();
const botsController = require('./bots.controller');
const commandsRouter = require('../commands/commands.router');

// Local Routes
router.post('/add', botsController.add);
// router.get('/all', botsController.getAll);
router.get('/', botsController.getAllByUser);

// botId routes - Attached the bot to req before perfomring action
router.use('/:id', botsController.attachBot); // Middleware
router.use('/:id/commands', commandsRouter); // Nested Route
router.get('/:id', botsController.getById);
router.put('/:id', botsController.update);
router.delete('/:id', botsController.delete);

module.exports = router;
