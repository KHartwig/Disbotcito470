const db = require('_infra/db/models/index');
const discordService = require('../discord/discord.service');
const commandService = require('../commands/commands.service');
const Bot = db.Bot;
const Command = db.Command;
const Action = db.Action;
const DiscordUser = db.DiscordUser;

const optCommands = {
        include: [{
                model: Command,
                include: [{
                        model: Action,
                        attributes: ['id', 'type', 'parameters']                        
                    }]
            }]
    };
const optCreateCommandsActions = {
    include: [{
        model: Command,
        include: [Action]
    }]
};

const VALID_BOT_STATUS = [
    'OFFLINE',
    'ONLINE'
];

module.exports = {
    getAll,
    getAllByUser,
    getById,
    create,
    update,
    updateStatus,
    delete: _delete
};

async function getAll(includeCommands) {
    const options = includeCommands ? optCommands : {};
    return await Bot.findAll(options);
}

async function getById(user, botId, includeCommands) {
    // Check for valid Id
    if (isNaN(botId)) return null;

    const options = {
        where:{
            id:botId
        },
        include: includeCommands === 'true' ? optCommands.include : null
    };

    // Get the session user and find the bot by its id
    const bots = await user.getBots(options);

    // Return the only bot in the array if it exists (should only be one)
    return bots && bots.length > 0 ? bots[0] : null;
}

async function getAllByUser(user, includeCommands) {
    const options = includeCommands === 'true' ? optCommands : {};
    const bots = await user.getBots(options);
    const retBots = await Promise.all( await bots.map(async bot => {
        const retBot = bot.get();
        retBot.user = await discordService.getBotUser(bot);
        console.log(`${retBot.name} has user ${retBot.user}`);
        return retBot;
    }));
    console.log('ALLBOTS', retBots);
    return retBots;
}

async function create(user, botParam) {
    // Create bot and set its Owner to the session user
    const bot = await Bot.create(botParam, optCreateCommandsActions);
    await bot.setOwner(user);
    await bot.reload();

    // Return the bot to confirm it's existence
    return bot;
}

async function update(bot, botParam) {
    // Defined in the models/bot.js, only sets 'writable' fields in db
    bot.writableFields = botParam;
    await bot.save();

    // Update the commands if they were sent too
    if (botParam.Commands)
        await commandService.updateAllByBot(bot, botParam.Commands);

    return bot;
}

// Update status to given status if it is a valid one
async function updateStatus(bot, status) {
    if (!VALID_BOT_STATUS.includes(status)) throw 'Invalid Status';
    bot.status = status;
    await bot.save();
    return bot;
}

async function _delete(bot) {
    // Delete the bot
    await Bot.destroy({where: {id: bot.get('id')}});
}