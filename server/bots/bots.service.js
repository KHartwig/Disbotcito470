const db = require('_infra/db/models/index');
const discordService = require('../discord/discord.service');
const commandService = require('../commands/commands.service');
const Bot = db.Bot;
const Command = db.Command;
const Action = db.Action;

const optCommands = {
        include: [{
                model: Command,
                include: [{
                        model: Action,
                        attributes: ['id', 'type', 'parameters']                        
                    }]
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
    delete: _delete,
    toggleStatus,
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
    return bots ? bots[0] : null;
}

async function getAllByUser(user, includeCommands) {
    const options = includeCommands === 'true' ? optCommands : {};
    return await user.getBots(options);
}

async function create(user, botParam) {
    // Create bot and set its Owner to the session user
    const bot = await Bot.create(botParam);
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
    if (botParam.commands)
        await commandService.updateAllByBot(bot, botParam.commands);

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

// Toggle status of bot between ONLINE and OFFLINE
async function toggleStatus(user, botId) {
    const bot = await getById(user, botId, "false");
    let currStatus = bot.status;
    if (!currStatus) throw 'Bot has a null status';

    if (currStatus === 'OFFLINE') {
        currStatus = 'ONLINE';
        discordService.createClient(bot)
            .catch(err => {
                console.log('Error creating client in discord service: ' + err.message)
            });
    }
    else {
        currStatus = 'OFFLINE';
        //todo: logout discord client?
    }
    bot.status = currStatus;
    await bot.save();

    return bot;
}
