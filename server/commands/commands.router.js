const express = require('express');
const router = express.Router();
const commandsController = require('./commands.controller');

// Routes
router.post('/add', commandsController.add);
router.get('/', commandsController.getAllByBot);

// CommandId routes
router.use('/:id', commandsController.attachCommand);
router.get('/:id', commandsController.getById);
router.put('/:id', commandsController.update);
router.delete('/:id', commandsController.delete);

module.exports = router;
