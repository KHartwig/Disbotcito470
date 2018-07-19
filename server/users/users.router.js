const express = require('express');
const router = express.Router();
const usersController = require('./users.controller');

// Routes
router.post('/authenticate', usersController.authenticate);
router.post('/register', usersController.register);
router.get('/', usersController.getAll);
router.get('/:id', usersController.getById);
router.get('/current', usersController.getCurrent);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.delete);

module.exports = router;
