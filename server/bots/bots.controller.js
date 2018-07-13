const express = require('express');
const router = express.Router();
const botService = require('./bots.service');

// routes
router.post('/add', add);
router.get('/', getAllByUser);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function add(req, res, next) {
    botService.create(req.body, req.user.sub)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getById(req, res, next) {
    botService.getById(req.params.id, req.user.sub)
        .then(bot => bot ? res.json(bot) : res.sendStatus(404))
        .catch(err => next(err));
}

function getAllByUser(req, res, next){
    botService.getAllByUser(req.user.sub)
        .then(bots => res.json(bots))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    botService.getAll()
        .then(bots => res.json(bots))
        .catch(err => next(err));
}

function update(req, res, next) {
    botService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    botService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
