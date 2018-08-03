const botService = require('./bots.service');
const discordService = require('../discord/discord.service');

module.exports = {
    attachBot,
    add,
    getById,
    getAllByUser,
    getAll,
    update,
    delete: _delete,
    toggleStatus
};

// Finds the bot and attaches it to the req object
function attachBot(req, res, next){
    botService.getById(req.sessionUser, req.params.id, req.query.includeCommands)
        .then(function (bot) {
            if (!bot) res.sendStatus(404);
            else {
                req.bot = bot;
                next();
            }
        })
        .catch(err => next(err));
}

function add(req, res, next) {
    botService.create(req.sessionUser, req.body)
        .then((bot) => res.json(bot))
        .catch(err => next(err));
}

// Bot already got by attachBot middleware
function getById(req, res, next) {
    res.json(req.bot);
}

function getAllByUser(req, res, next){
    botService.getAllByUser(req.sessionUser, req.query.includeCommands)
        .then(bots => res.json(bots))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    botService.getAll(req.query.includeCommands)
        .then(bots => res.json(bots))
        .catch(err => next(err));
}

function update(req, res, next) {
    botService.update(req.bot, req.body)
        .then((bot) => {
            console.log('~ Bot updated: ' + JSON.stringify(req.body));
            console.log('--- Commands: ' + JSON.stringify(req.body.commands));
            discordService.updateClientCommands(bot, req.body.commands)
                .catch(err => console.log('Error updating commands from bot controller: ' + err.message));
            res.json(bot);
        })
        .catch(err => next(err));
}

function _delete(req, res, next) {
    botService.delete(req.bot)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function toggleStatus(req, res, next) {
    console.log(req);
    botService.toggleStatus(req.sessionUser, req.params.id)
        .then((bot) => {
            const guilds = discordService.getGuilds(bot);
            console.log('-- Sending guilds back: ' + JSON.stringify(guilds));
            res.json({
                'bot': bot,
                'guilds': guilds
            });
        })
        .catch(err => next(err));
}
