const db = require('_infra/db/models/index');
const User = db.User;
const Bot = db.Bot;

module.exports = {
    getAll,
    getAllByUser,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Bot.findAll();
}

async function getById(botId, userId) {
    // Find the bot
    const bot = await Bot.findById(botId);
    if (!bot) throw 'Bot not found';

    // Check if the session user is allowed to access this bot
    const botOwnerId = bot.get('OwnerId');
    if (botOwnerId !== userId) throw 'Session user not authorized';

    return bot;
}

async function getAllByUser(userId) {
    const user = await User.findById(userId);
    if (!user) throw 'Session user does not exist';
    const bots = await user.getBots();
    return bots;
}

async function create(botParam, userId) {
    const user = await User.findById(userId);
    if (!user) throw 'Session user does not exist';
    console.log('Create: Logging user...');
    console.log(user.get());

    // Create bot and set its
    const bot = await Bot.create(botParam);
    bot.setOwner(user);
}

// TODO finish this
async function update(id, contactParam) {
    const bot = await Bot.findById(id);

    // validate
    if (!bot) throw 'Bot not found';

    // copy contactParam properties to contact
    Object.assign(bot, contactParam);

    await bot.save();
}

async function _delete(id) {
    await Bot.destroy({where: {id: id}});
}
