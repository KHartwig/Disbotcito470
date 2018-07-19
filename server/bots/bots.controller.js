const botService = require('./bots.service');

module.exports = {
    attachBot,
    add,
    getById,
    getAllByUser,
    getAll,
    update,
    delete: _delete
};

// Finds the bot and attaches it to the req object
function attachBot(req, res, next){
    botService.getById(req.params.id, req.user.sub)
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
    botService.create(req.body, req.user.sub)
        .then((bot) => res.json(bot))
        .catch(err => next(err));
}

// Bot already got by attachBot middleware, respond from req object
function getById(req, res, next) {
    res.json(req.bot);
}

function getAllByUser(req, res, next){
    botService.getAllByUser(req.user.sub, req.query.includeCommands)
        .then(bots => res.json(bots))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    botService.getAll(req.query.includeCommands)
        .then(bots => res.json(bots))
        .catch(err => next(err));
}

function update(req, res, next) {
    botService.update(req.bot, req.body, req.user.sub)
        .then((bot) => res.json(bot))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    botService.delete(req.bot, req.user.sub)
        .then(() => res.json({}))
        .catch(err => next(err));
}
