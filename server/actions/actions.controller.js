const actionsService = require('./actions.service');
const discordService = require('../discord/discord.service');

module.exports = {
    add,
    getAllByCommand,
    attachAction,
    getById,
    update,
    delete: _delete
};


function add(req, res, next) {
    actionsService.create(req.command, req.body)
        .then(action => res.json(action))
        .catch(err => next(err));
    discordService.updateClientCommands(req.bot, req.bot.commands)
        .catch(err => next(err));
}

function getAllByCommand(req, res, next){
    actionsService.getAllByCommand(req.command)
        .then(actions => res.json(actions))
        .catch(err => next(err));
}

// Attaches specified action to the req object
function attachAction(req, res, next) {
    actionsService.getById(req.command, req.params.id)
        .then(function (action) {
            if (!action) res.sendStatus(404);
            else {
                req.action = action;
                next();
            }
        })
        .catch(err => next(err));
}

// Action already got by attachAction middleware, respond from req object
function getById(req, res, next) {
    res.json(req.action);
}

function update(req, res, next) {
    actionsService.update(req.action, req.body)
        .then((action) => res.json(action))
        .catch(err => next(err));
    discordService.updateClientCommands(req.bot, req.bot.commands)
        .catch(err => next(err));
}

function _delete(req, res, next) {
    actionsService.delete(req.action)
        .then(() => res.json({}))
        .catch(err => next(err));
    discordService.updateClientCommands(req.bot, req.bot.commands)
        .catch(err => next(err));
}
