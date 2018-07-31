const clientWrapper = require('../_infra/discord/index');

let cwMap = new Map();

module.exports = {
    createClient,
    destroyClient,
    updateClientCommands,
    getGuildObject,
    getGuilds,
    getGuildById,
    getGuildMembers,
    getGuildEmojis,
    shutdown
};

const DEFAULT_LIMIT = 100;

async function createClient(bot) {
    cwMap.set(bot.id, new clientWrapper(bot.discordToken, bot.commandPrefix, bot.commands));
    console.log('Client created for bot ' + bot.id + ' (' + bot.name + ')')
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
    console.log('All clients destroyed');
}

async function updateClientCommands(bot, commands) {
    console.log('Trying to update commands for bot ' + bot.id + ' (' + bot.name + ')...');
    cwMap.get(bot.id).sync(commands);
    console.log('Commands updated for bot ' + bot.name);
}

async function getGuildObject(bot, guildId) {
    const clientWrapper = cwMap.get(bot.id);
    if (!clientWrapper) throw 'Bot must be started';
    const guild = clientWrapper.client.guilds.find('id', guildId);
    if (guild && !guild.available) throw 'Guild Unavailable';
    return guild;
}

async function getGuilds(bot) {
    const clientWrapper = cwMap.get(bot.id);
    if (!clientWrapper) throw 'Bot must be started';
    return cwMap.get(bot.id).client.guilds.first(DEFAULT_LIMIT).map(guildFilter);
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
function guildFilter(guild) {
    return {
        id: guild.id,                               // string - discord id
        name: guild.name,                           // string - name of the guild
        iconURL: guild.iconURL,                     // string - url to guild's icon
        ownerUsername: guild.owner.user.username,   // string - Username of the owner user
        ownerID: guild.ownerID,                     // string - ID of the owner user
        memberCount: guild.memberCount,             // number - Number of members in the guild
        region: guild.region,                       // string - Region where guild is hosted
        available: guild.available                  // bool - false indicates server outage
    }
}

function memberFilter(member) {
    return {
        id: member.id,                              // string - discord id
        username: member.user.username,             // string - username of the user
        nickname: member.nickname,                  // string - nickname in the guild
        displayName: member.displayName,            // string - nickname, if null then username
        tag: member.user.tag,                       // string - discord tag of the user
        avatarURL: member.user.displayAvatarURL,    // string - url to the avatar pic/gif
        status: member.user.presence.status,        // string - 'online', 'offline', 'idle', 'dnd' - DoNotDisturb
        joinedAt: member.joinedAt,                  // date - when user became a member of the guild
        createdAt: member.user.createdAt,           // date - when the user was created
        bot: member.user.bot                        // boolean - true if user is a bot
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
