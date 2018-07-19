const commandService = require('./commands.service');
const botService = require('../bots/bots.service');

module.exports = {
    add,
    getAllByBot,
    attachCommand,
    getById,
    update,
    delete: _delete
};


function add(req, res, next) {
    commandService.create(req.bot, req.body)
        .then(command => res.json(command))
        .catch(err => next(err));
}

function getAllByBot(req, res, next){
    commandService.getAllByBot(req.bot)
        .then(commands => res.json(commands))
        .catch(err => next(err));
}

// Attaches specified command to the req object
function attachCommand(req, res, next) {
    commandService.getById(req.bot, req.params.id)
        .then(function (command) {
            if (!command) res.sendStatus(404);
            else {
                req.command = command;
                next();
            }
        })
        .catch(err => next(err));
}

// Command already got by attachCommand middleware, respond from req object
function getById(req, res, next) {
    res.json(req.command);
}

function update(req, res, next) {
    commandService.update(req.command, req.body)
        .then((command) => res.json(command))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    commandService.delete(req.command)
        .then(() => res.json({}))
        .catch(err => next(err));
}