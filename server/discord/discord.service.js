const clientWrapper = require('../_infra/discord/index');
const db = require('_infra/db/models/index');

let cwMap = new Map();
let guildMap = new Map();
let botUserMap = new Map();

const Action = db.Action;
const optActions = {
    include: [{
        model: Action,
        attributes: ['id', 'type', 'parameters']
    }]
};

module.exports = {
    createClient,
    destroyClient,
    updateClientCommands,
    updateClientCommandPrefix,
    getBotUser,
    getGuildObject,
    getGuilds,
    getGuildById,
    getGuildMembers,
    getGuildEmojis,
    shutdown
};

const DEFAULT_LIMIT = 100;

async function createClient(bot) {
    let newClient = new clientWrapper(bot.discordToken, bot.commandPrefix, await bot.getCommands(optActions));
    try {
        await newClient.login();
    } catch (err) {
        throw 'Cannot start bot, invalid token';
    }

    cwMap.set(bot.id, newClient);
    console.log('Client created for bot ' + bot.id + ' (' + bot.name + ')');
    const guilds = newClient.client.guilds.first(DEFAULT_LIMIT).map(guildFilter);
    guildMap.set(bot.id, guilds);
    const botUser = newClient.client.user;
    botUserMap.set(bot.id, botUser);
    console.log('Initial guild cache for bot ' + bot.id + ': ' + JSON.stringify(guilds));
}

async function destroyClient(bot) {
    cwMap.get(bot.id).destroy();
    cwMap.delete(bot.id);
}

function destroyAllClients(){
    cwMap.forEach((cw, botId) => {
        console.log('Destroy client for bot ' + botId);
        cw.destroy();
    });
    cwMap.clear();
    guildMap.clear();
    botUserMap.clear();
    console.log('All clients destroyed');
}

async function updateClientCommands(bot, commands) {
    console.log('Trying to update commands for bot ' + bot.id + ' (' + bot.name + ')...');
    const cw = cwMap.get(bot.id);
    if (!cw) throw 'Cannot update commands, bot not started';
    cw.syncCommands(commands);
}

async function updateClientCommandPrefix(bot, commandPrefix) {
    console.log('Trying to update command prefix for bot ' + bot.id + ' (' + bot.name + ')...');
    const cw = cwMap.get(bot.id);
    if (!cw) throw 'Cannot update command prefix, bot not started';
    cw.syncCommandPrefix(commandPrefix);
}

async function getBotUser(bot) {
    const clientWrapper = cwMap.get(bot.id);
    if (!clientWrapper || !clientWrapper.isOnline()) {
        const cachedBotUser = botUserMap.get(bot.id);
        return cachedBotUser ? userFilter(cachedBotUser) : null;
    }

    botUserMap.set(bot.id, clientWrapper.client.user);
    console.log('BotUser cache updated for bot ' + bot.id + ' (' + bot.name + ')');

    return userFilter(botUserMap.get(bot.id));
}

async function getGuildObject(bot, guildId) {
    const clientWrapper = cwMap.get(bot.id);
    if (!clientWrapper || !clientWrapper.isOnline()) {
        console.log('Returning cached guilds for ' + bot.name + ': ' + guildMap.get(bot.id));
        return guildMap.get(bot.id);
    }

    const guild = clientWrapper.client.guilds.find('id', guildId);
    if (guild && !guild.available) throw 'Guild Unavailable';
    return guild;
}

async function getGuilds(bot) {
    const clientWrapper = cwMap.get(bot.id);
    if (!clientWrapper || !clientWrapper.isOnline()) {
        console.log('Returning cached guilds for ' + bot.name + ': ' + guildMap.get(bot.id));
        return guildMap.get(bot.id);
    }

    guildMap.set(bot.id, clientWrapper.client.guilds.first(DEFAULT_LIMIT).map(guildFilter));
    console.log('Guild cache updated for bot ' + bot.id + ' (' + bot.name + ')');

    return guildMap.get(bot.id);
}

async function getGuildById(guild) {
    return guildFilter(guild);
}

async function getGuildMembers(guild) {
    return guild.members.first(DEFAULT_LIMIT).map(memberFilter);
}

async function getGuildEmojis(guild) {
    return guild.emojis.first(DEFAULT_LIMIT).map(emojiFilter);
}

// Discord Object filters
function userFilter(user) {
    return {
        id: user.id,
        username: user.username,             // string - username of the user
        tag: user.tag,                       // string - discord tag of the user
        avatarURL: user.displayAvatarURL,    // string - url to the avatar pic/gif
        status: user.presence.status,        // string - 'online', 'offline', 'idle', 'dnd' - DoNotDisturb
        createdAt: user.createdAt,           // date - when the user was created
        bot: user.bot                        // boolean - true if user is a bot
    }
}

function guildFilter(guild) {
    return {
        id: guild.id,                               // string - discord id
        name: guild.name,                           // string - name of the guild
        iconURL: guild.iconURL,                     // string - url to guild's icon
        owner: userFilter(guild.owner),             // string - Username of the owner user
        ownerID: guild.ownerID,                     // string - ID of the owner user
        memberCount: guild.memberCount,             // number - Number of members in the guild
        members: guild.members.first(DEFAULT_LIMIT).map(memberFilter),
        emojis: guild.emojis.first(DEFAULT_LIMIT).map(emojiFilter),
        region: guild.region,                       // string - Region where guild is hosted
        available: guild.available                  // bool - false indicates server outage
    }
}

function memberFilter(member) {
    return {
        id: member.id,                              // string - discord id
        user: userFilter(member.user),              // User - user representing this guild member
        nickname: member.nickname,                  // string - nickname in the guild
        displayName: member.displayName,            // string - nickname, if null then username
        joinedAt: member.joinedAt,                  // date - when user became a member of the guild
    }
}

function emojiFilter(emoji) {
    return {
        id: emoji.id,                               // string - discord id
        name: emoji.name,                           // string - name of the emoji
        url: emoji.url,                             // string - url where emoji is found
        requiresColons: emoji.requiresColons,       // bool -  true if emoji requires colons surrounding name
        createdAt: emoji.createdAt                  // date - when emoji was created
    }
}

// Shut down cleanup
function shutdown() {
    console.log('Shutting down discord...');
    destroyAllClients();
}
