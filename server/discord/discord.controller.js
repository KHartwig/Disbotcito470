const discordService = require('./discord.service');

module.exports = {
    start,
    stop.
    getAllByBot,
    attachGuildObject,
    getById,
    getMembersByGuildGid,
    getEmojisByGid
};
//
function start(req, res, next){
  discordService.createClient(req.bot)
    .then(() => res.json({}))
    .catch(err => next(err));
  botService.updateStatus(req.bot, 'ONLINE')
    .then((bot) => res.json(bot))
    .catch(err => next(err));
}

function stop(req, res, next) {
  botService.updateStatus(req.bot, 'OFFLINE')
    .then((bot) => res.json(bot))
    .catch(err => next(err));
  discordService.destroyClient(req.bot)
    .then((bot) => res.json({}))
    .catch(err => next(err));
}

function getAllByBot(req, res, next) {
  discordService.getGuildById(req.bot)
    .then((guild) => res.json(guild))
    .catch(err => next(err));
}

function attachGuildObject(req, res, next) {
  getGuildObject(req.bot)
    .then(function (guild) {
        if (!guild) res.sendStatus(404);
        else {
            req.guild= guild;
            next();
        }
    })
    .catch(err => next(err));
}
function getById(req, res, next) {
  discordService.getGuildById(req.guild)
}

function getMembersByGuildGid(req, res, next) {
  discordService.getGuildMembers(req.guild)
}

function getEmojisByGid(req, res, next) {
  discordService.getGuildEmojis(req.guild)
}
