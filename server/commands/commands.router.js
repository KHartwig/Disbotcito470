const express = require('express');
const router = express.Router();
const commandsController = require('./commands.controller');
const actionsRouter = require('../actions/actions.router');

// Routes
router.post('/add', commandsController.add);
router.get('/', commandsController.getAllByBot);
router.put('/', commandsController.updateAllByBot);

// CommandId routes
router.use('/:id', commandsController.attachCommand);
router.use('/:id/actions', actionsRouter); // Nested Route
router.get('/:id', commandsController.getById);
router.put('/:id', commandsController.update);
router.delete('/:id', commandsController.delete);

module.exports = router;
