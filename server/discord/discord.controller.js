const discordService = require('./discord.service');
const botService = require('../bots/bots.service');

module.exports = {
    attachGuildObject,
    start,
    stop,
    getAllGuildsByBot,
    getById,
    getMembersByGuild,
    getEmojisByGuild
};

function attachGuildObject(req, res, next) {
    discordService.getGuildObject(req.bot, req.params.gid)
        .then(function (guild) {
            if (!guild) res.sendStatus(404);
            else {
                req.guild = guild;
                next();
            }
        })
        .catch(err => next(err));
}

function start(req, res, next){
    console.log('Bot: ' + JSON.stringify(req.bot));
  discordService.createClient(req.bot)
    .then(() => {
        botService.updateStatus(req.bot, 'ONLINE')
            .then(async bot => {
                const guilds = await discordService.getGuilds(bot);
                const retBot = bot.get();
                retBot.user = await discordService.getBotUser(bot);
                res.json({
                    'bot': retBot,
                    'guilds': guilds
                });
            })
            .catch(err => { next(err); });
    })
    .catch(err => next(err));
}

function stop(req, res, next) {
  discordService.destroyClient(req.bot)
    .then(() => {
        botService.updateStatus(req.bot, 'OFFLINE')
            .then(async bot => {
                const guilds = await discordService.getGuilds(bot);
                const retBot = bot.get();
                retBot.user = await discordService.getBotUser(bot);
                res.json({
                    'bot': retBot,
                    'guilds': guilds
                });
            })
            .catch(err => next(err));
    })
    .catch(err => next(err));
}

function getAllGuildsByBot(req, res, next) {
  discordService.getGuilds(req.bot)
    .then((guilds) => res.json(guilds))
    .catch(err => next(err));
}

function getById(req, res, next) {
    discordService.getGuildById(req.guild)
        .then(guild => { res.json(guild) })
        .catch(err => next(err));
}

function getMembersByGuild(req, res, next) {
  discordService.getGuildMembers(req.guild)
    .then(members => { res.json(members) })
    .catch(err => next(err));
}

function getEmojisByGuild(req, res, next) {
    discordService.getGuildEmojis(req.guild)
        .then(members => { res.json(members) })
        .catch(err => next(err));
}
