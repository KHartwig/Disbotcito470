const clientWrapper = require('../_infra/discord/index');
const db = require('_infra/db/models/index');
const models = require('_infra/db/models');

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
    startup,
    createClient,
    destroyClient,
    updateClientCommands,
    updateClientCommandPrefix,
    validateDiscordToken,
    getBotUser,
    getGuildObject,
    getGuilds,
    getGuildById,
    getGuildMembers,
    getGuildEmojis,
    shutdown
};

const DEFAULT_LIMIT = 100;

function startup() {
    models.Bot.findAll()
        .then(async bots => {
            console.log('** Startup bots: ' + JSON.stringify(bots));
            await initializeDiscordCache(bots);
        })
        .catch(err => console.log('Error initializing bots from database: ' + err));
}

async function initializeDiscordCache(bots) {
    for (let i = 0; i < bots.length; ++i) {
        let bot = bots[i];
        //console.log('Current bot: ' + JSON.stringify(bot));
        let newClient = new clientWrapper(bot.discordToken, bot.commandPrefix, []);
        try {
            await newClient.login();
        } catch (err) {
            throw 'Invalid token';
        }

        const botUser = newClient.client.user;
        botUserMap.set(bot.id, botUser);
        const guilds = newClient.client.guilds.first(DEFAULT_LIMIT);
        guildMap.set(bot.id, guilds);
        console.log('Initialized botUser and guild cache for ' + botUser.username + '(' + bot.id + ')');
        newClient.destroy();
    }
}

async function createClient(bot) {
    let newClient = new clientWrapper(bot.discordToken, bot.commandPrefix, await bot.getCommands(optActions));
    try {
        await newClient.login();
    } catch (err) {
        throw 'Cannot start bot, invalid token';
    }

    cwMap.set(bot.id, newClient);
    console.log('Client created for bot ' + bot.id + ' (' + bot.name + ')');
    const guilds = newClient.client.guilds.first(DEFAULT_LIMIT);
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

async function validateDiscordToken(token) {
    console.log('Validating token: ' + token);
    let newClient = new clientWrapper(token, '$', []);
    try {
        await newClient.login();
    } catch (err) {
        throw 'Invalid Discord token';
    }

    const botUser = userFilter(newClient.client.user);
    newClient.destroy();
    return botUser;
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
        // console.log('Returning cached guilds for ' + bot.name + ': ' + JSON.stringify(guildMap.get(bot.id)));
        const retGuild = guildMap.get(bot.id).find(guild => guild.id === guildId);
        console.log('Ret guild', retGuild);
        return retGuild;
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

    guildMap.set(bot.id, clientWrapper.client.guilds.first(DEFAULT_LIMIT));
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
function presenceFilter(presence) {
    return {
        status: presence.status                     // string - 'online', 'offline', 'idle', 'dnd' - DoNotDisturb
    }
}

function userFilter(user) {
    return {
        id: user.id,
        username: user.username,                    // string - username of the user
        tag: user.tag,                              // string - discord tag of the user
        avatarURL: user.displayAvatarURL,           // string - url to the avatar pic/gif
        presence: presenceFilter(user.presence),    // presence - object to see status of user
        createdAt: user.createdAt,                  // date - when the user was created
        bot: user.bot                               // boolean - true if user is a bot
    }
}

function guildFilter(guild) {
    return {
        id: guild.id,                               // string - discord id
        name: guild.name,                           // string - name of the guild
        iconURL: guild.iconURL,                     // string - url to guild's icon
        owner: memberFilter(guild.owner),             // string - Username of the owner user
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
