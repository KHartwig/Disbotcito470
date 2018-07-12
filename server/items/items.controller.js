const express = require('express');
const router = express.Router();
const itemService = require('./item.service');

// routes
// router.post('/authenticate', authenticate);
router.post('/create', create);
router.get('/', getAll);
router.get('/:id', getById);
router.get('/current', getCurrent);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;


function create(req, res, next) {
    itemService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}




function getById(req, res, next) {
    itemService.getById(req.params.id)
        .then(item => item ? res.json(item) : res.sendStatus(404))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    itemService.getAll()
        .then(items => res.json(items))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    itemService.getById(req.params.sub)
        .then(item => item ? res.json(item) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    itemService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    itemService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
