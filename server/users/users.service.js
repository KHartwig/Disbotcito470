const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_infra/db/models/index');
const User = db.User;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ username, password }) {
    const user = await User.findOne({ where: { username: username } });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.get({plain: true});
        const token = jwt.sign({ sub: user.id }, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}

async function getAll() {
    return await User.findAll({
        attributes: ['id', 'username', 'email']
    });
}

async function getById(id) {
    if (isNaN(id)) return null;
    return await User.findById(id, {
        attributes: ['id', 'username', 'email']
    });
}

async function create(userParam) {
    // validate
    if (await User.findOne({ where: {username: userParam.username} })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }
    if (await User.findOne({ where: {email: userParam.email} })) {
        throw 'Email "' + userParam.email + '" is already taken';
    }

    const user = User.build(userParam);

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();
}

async function update(id, userParam) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.username !== userParam.username && await User.findOne({ where: {username: userParam.username} })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }
    if (user.email !== userParam.email && await User.findOne({ where: {email: userParam.email} })) {
        throw 'Email "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await User.destroy({where: {id: id}});
}
