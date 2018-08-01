const actionService = require('../actions/actions.service');
const db = require('_infra/db/models/index');
const User = db.User;
const Bot = db.Bot;
const Command = db.Command;
const Action = db.Action;

const optActions = {
                include: [{
                        model: Action,
                        attributes: ['id', 'type', 'parameters']
                    }]
            };

module.exports = {
    getAll,
    getAllByBot,
    getById,
    create,
    update,
    updateAllByBot,
    delete: _delete
};

async function getAll() {
    return await Command.findAll();
}

async function getAllByBot(bot) {
    const commands = await bot.getCommands(optActions);
    return commands;
}

async function getById(bot, comId){
    // Check for valid Id
    if (isNaN(comId)) return null;

    const options = {where:{id:comId}, include: optActions.include};
    const commands = await bot.getCommands(options);

    // Return the only command in the array if it exists (should only be one)
    return commands ? commands[0] : null;
}

// Can also create actions
async function create(bot, commandParam) {
    // Create command and set its Bot from parameter, also creates actions
    const command = await Command.create(commandParam, {
        include: [ Action ]
    });
    await command.setBot(bot);
    await command.reload();

    // Return the command to confirm it's existence
    return command;
}

// Does not update actions
async function update(command, commandParam) {
    console.log('Commands UPDATE ', commandParam);
    command.update(commandParam);
    await actionService.updateAllByCommand(command, commandParam.Actions);
    return command;
}

// Updates all commands of a bot
async function updateAllByBot(bot, commands) {
    let oldCommands = await bot.getCommands(optActions);
    // console.log('WE GOT COMMANDS ~ SERVICE', commands);
    // console.log('OLD COMMANDS:', oldCommands[0].get());
    for (let i = 0; i < commands.length; i++){
      let command = commands[i];
      //Add new command
      if (!command.id){
        // console.log('command being created for ' + command.name);
        await create(bot, command);
      }
      // Modify command
      else {
        // console.log(`command modified for ${command.name} id ${command.id}`);
        await update(await getById(bot, command.id), command);
      }
    }
    for (let i = 0; i < oldCommands.length; i++){
      let oldCommand = oldCommands[i];
      //delete commands that no longer exist
      if (!commands.some((newCommand) => newCommand.id === oldCommand.id)){
        // console.log(`Removing command for ${oldCommand.name} id ${oldCommand.id}`);
        await _delete(oldCommand);
      }
    }
    return await getAllByBot(bot);
}

// Cascades to delete actions
async function _delete(command) {
    // Delete the command
    await Command.destroy({where: {id: command.get('id')}});
}
