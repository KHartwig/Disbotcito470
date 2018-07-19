const db = require('_infra/db/models/index');
const User = db.User;
const Bot = db.Bot;
const Command = db.Command;
const Action = db.Action;

const optCommands = {
        include: [{
                model: Command,
                include: [{
                        model: Action
                    }]
            }]
    };

module.exports = {
    getAll,
    getAllByUser,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll(includeCommands) {
    const options = includeCommands ? optCommands : {};
    return await Bot.findAll(options);
}

async function getById(botId, userId, includeCommands) {
    // Check for valid Id
    if (isNaN(botId)) return null;

    const options = { where:{id:botId},
                        include: includeCommands == 'true' ? optCommands.include : null
    }

    // Get the session user and find the bot by its id
    const user = await getSessionUser(userId);
    const bots = await user.getBots(options);

    // Return the only bot in the array if it exists (should only be one)
    return bots ? bots[0] : null;
}

async function getAllByUser(userId, includeCommands) {
    const options = includeCommands == 'true' ? optCommands : {};
    const user = await getSessionUser(userId);
    const bots = await user.getBots(options);
    return bots;
}

async function create(botParam, userId) {
    const user = await getSessionUser(userId);

    // Create bot and set its Owner to the session user
    const bot = await Bot.create(botParam);
    await bot.setOwner(user);
    await bot.reload();

    // Return the bot to confirm it's existence
    return bot;
}

async function update(bot, botParam) {
    // const bot = await getBotIfExists(botId, userId);

    // Defined in the models/bot.js, only sets 'writable' fields in db
    bot.writableFields = botParam;
    await bot.save();
    return bot;
}

async function _delete(bot) {
    // Find the bot
    // const bot = await getBotIfExists(botId, userId);

    // Delete the bot
    await Bot.destroy({where: {id: bot.get('id')}});
}

// Finds ther user specified (intended to be session user)
async function getSessionUser(userId) {
    const user = await User.findById(userId);
    if (!user) throw 'Session user does not exist';
    return user;
}

// Use this method if we want to throw an error (not '404')
//      when the bot cannot be found
// async function getBotIfExists(botId, userId) {
//     const bot = await getById(botId, userId);
//     if (!bot) throw 'Bot does not exist';
//     return bot;
// }
