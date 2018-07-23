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
    delete: _delete
};

async function getAll() {
    return await Action.findAll();
}

async function getAllByCommand(command) {
    const actions = await command.getActions(optActions);
    return actions;
}

async function getById(command, comId){
    // Check for valid Id
    if (isNaN(comId)) return null;

    const options = {where:{id:comId}, include: optActions.include};
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

// Cascades to delete actions
async function _delete(action) {
    // Delete the action
    await Action.destroy({where: {id: action.get('id')}});
}
