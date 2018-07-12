const express = require('express');
const router = express.Router();
const featuredItemService = require('./featured_item.service');

// routes
router.post('/create', create);
router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;

function create(req, res, next) {
    featuredItemService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getById(req, res, next) {
    featuredItemService.getById(req.params.id)
        .then(item => item ? res.json(item) : res.sendStatus(404))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    featuredItemService.getAll()
        .then(items => res.json(items))
        .catch(err => next(err));
}