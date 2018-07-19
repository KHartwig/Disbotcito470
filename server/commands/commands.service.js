const db = require('_infra/db/models/index');
const User = db.User;
const Bot = db.Bot;
const Command = db.Command;

module.exports = {
    getAll,
    getAllByBot,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Command.findAll();
}

async function getAllByBot(bot) {
    const commands = await bot.getCommands();
    return commands;
}

async function getById(bot, comId){
    // Check for valid Id
    if (isNaN(comId)) return null;

    const options = {where:{id:comId}};
    const commands = await bot.getCommands(options);

    // Return the only command in the array if it exists (should only be one)
    return commands ? commands[0] : null;
}

async function create(bot, commandParam) {
    // Create command and set its Bot from parameter
    const command = await Command.create(commandParam);
    await command.setBot(bot);
    await command.reload();

    // Return the command to confirm it's existence
    return command;
}

async function update(command, commandParam) {
    command.update(commandParam);
    return command;
}

async function _delete(command) {
    // Delete the command
    await Command.destroy({where: {id: command.get('id')}});
}
