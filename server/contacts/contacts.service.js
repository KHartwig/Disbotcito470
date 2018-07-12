const db = require('_helpers/db');
const Contact = db.Contact;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Contact.find();
}

async function getById(id) {
    return await Contact.findById(id);
}

async function create(contactParam) {
    // console.log('Logging contactParam');
    // console.log(contactParam);

    const contact = new Contact(contactParam);

    // save contact
    await contact.save();
}

async function update(id, contactParam) {
    const contact = await Contact.findById(id);

    // validate
    if (!contact) throw 'User not found';

    // copy contactParam properties to contact
    Object.assign(contact, contactParam);

    await contact.save();
}

async function _delete(id) {
    await Contact.findByIdAndRemove(id);
}