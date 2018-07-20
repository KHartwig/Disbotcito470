const express = require('express');
const router = express.Router();
const actionsController = require('./actions.controller');

// Routes
router.post('/add', actionsController.add);
router.get('/', actionsController.getAllByCommand);

// ActionsId routes
router.use('/:id', actionsController.attachAction);
router.get('/:id', actionsController.getById);
router.put('/:id', actionsController.update);
router.delete('/:id', actionsController.delete);

module.exports = router;
