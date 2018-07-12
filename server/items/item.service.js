const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Item = db.Item;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};




async function getAll() {
    return await Item.find().select('-hash');
}

async function getById(id) {
    return await Item.findById(id).select('-hash');
}


async function create(itemParam) {
    const item = new Item(itemParam);
    // save item from itemParam
    await item.save();
}


async function update(id, itemParam) {
    const item = await Item.findById(id);

    // validate
    if (!item) throw 'Item not found';
    if (item.itemname !== itemParam.itemname && await Item.findOne({ itemname: itemParam.itemname })) {
        throw 'Itemname "' + itemParam.itemname + '" is already taken';
    }

    // copy itemParam properties to item
    Object.assign(item, itemParam);

    await item.save();
}

async function _delete(id) {
    await Item.findByIdAndRemove(id);
}

