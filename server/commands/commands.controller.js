const commandService = require('./commands.service');
const botService = require('../bots/bots.service');
const discordService = require('../discord/discord.service');

module.exports = {
    add,
    getAllByBot,
    attachCommand,
    getById,
    update,
    updateAllByBot,
    delete: _delete
};


function add(req, res, next) {
    commandService.create(req.bot, req.body)
        .then(command => {
            discordService.updateClientCommands(req.bot, req.body)
                .catch(err => next(err));
            res.json(command);
        })
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

// TODO discord Service needs to be called synchronously with  commandService
function update(req, res, next) {
    commandService.update(req.command, req.body)
        .then(command => {
            discordService.updateClientCommands(req.bot, req.body)
                .catch(err => next(err));
            res.json(command);
        })
        .catch(err => next(err));
}

function updateAllByBot(req, res, next) {
    commandService.updateAllByBot(req.bot, req.body.commands)
        .then((commands) => {
            discordService.updateClientCommands(req.bot, req.body)
                .catch(err => next(err));
            res.json(commands);
        })
        .catch(err => next(err));
}

function _delete(req, res, next) {
    commandService.delete(req.command)
        .then(() => {
            discordService.updateClientCommands(req.bot, req.body)
                .catch(err => next(err));
            res.json({});
        })
        .catch(err => next(err));
}
