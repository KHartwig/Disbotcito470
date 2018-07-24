const clientWrapper = require('_infra/discord/index');

let cwMap = {};

module.exports = {
    createClient,
    destroyClient,
    updateClientCommands,
    getGuilds,
    getGuildById,
    getGuildMembers,
    getGuildEmojis
};

async function createClient(bot, commands) {
    cwMap[botId] = new clientWrapper(botId, commands);
}

async function destroyClient(bot) {
    cwMap[botId].destroy();
    delete cwMap[botId];
}

async function updateClientCommands(bot, commands) {
    cwMap[botId].updateCommands(commands);
}

async function getGuilds(bot) {
    // const guilds = await cwMap[botId].client.guilds();
}

async function getGuildsById(bot, guildId) {
    // const guilds = await cwMap[botId].client.guilds();
}

async function getGuildMembers(bot, guildId) {
    // const guilds = await cwMap[botId].client.guilds();
}

async function getGuildEmojis(userId, guildId) {
    // const guilds = await cwMap[botId].client.guilds();
}
