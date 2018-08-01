const db = require('_infra/db/models/index');
const Command = db.Command;
const Action = db.Action;

const optActions = {
                        attributes: ['id', 'type', 'parameters']
            };

module.exports = {
    getAll,
    getAllByCommand,
    getById,
    create,
    update,
    updateAllByCommand,
    delete: _delete
};

async function getAll() {
    return await Action.findAll();
}

async function getAllByCommand(command) {
    const actions = await command.getActions(optActions);
    return actions;
}

async function getById(command, actId){
    // Check for valid Id
    if (isNaN(actId)) return null;

    const options = {where:{id:actId}, include: optActions.include};
    const actions = await command.getActions(options);

    // Return the only action in the array if it exists (should only be one)
    return actions ? actions[0] : null;
}

// Updates actions
async function create(command, actionParam) {
    // Create action and set its Command from parameter, also creates actions
    const action = await Action.create(actionParam);
    await action.setCommand(command);
    await action.reload();

    // Return the action to confirm it's existence
    return action;
}

// Does not update actions
async function update(action, actionParam) {
    action.update(actionParam);
    return action;
}

async function updateAllByCommand(command, actions) {
  let oldActions = await command.getActions(optActions);

  // console.log('> updateAll for command ' + command.name + ' id-' + command.id);
  for (let i = 0; i < actions.length; i++){
    let action = actions[i];
    //Add new action
    // console.log('>> ' + i + ' action ' + action.type + ' id-' + action.id);
    if (!action.id){
      // console.log('>>>> action being created for ' + action.type);
      await create(command, action);
    }
    // Modify action
    else {
      // console.log(`>>>> action modified for ${action.type} id ${action.id}`);
      await update(await getById(command, action.id), action);
    }
  }
  for (let i = 0; i < oldActions.length; i++){
    let oldAction = oldActions[i];
    //delete actions that no longer exist
    if (!actions.some((newAction) => newAction.id === oldAction.id)){
      // console.log(`>>>> Removing action for ${oldAction.type} id ${oldAction.id}`);
      await _delete(oldAction);
    }
  }
}

// Cascades to delete actions
async function _delete(action) {
    // Delete the action
    await Action.destroy({where: {id: action.get('id')}});
}
