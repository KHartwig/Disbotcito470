const userService = require('./users.service');

module.exports = {
    attachSessionUser,
    authenticate,
    register,
    getById,
    getAll,
    getCurrent,
    update,
    delete: _delete
};

function attachSessionUser(req, res, next) {
    userService.getById(req.user.sub)
        .then(function (user) {
            if (user){
                req.sessionUser = user;
                next();
            }
            else res.status(409).json({ message: 'Session user no longer exists'});
        })
        .catch(err => next(err));
}

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    req.sessionUser ? res.json(req.sessionUser) : res.sendStatus(404);
}

function update(req, res, next) {
    if (req.sessionUser.id !== req.params.id)
        res.sendStatus(404);
    else
        userService.update(req.params.id, req.body)
            .then(() => res.json({}))
            .catch(err => next(err));
}

function _delete(req, res, next) {
    if (req.sessionUser.id !== req.params.id)
        res.sendStatus(404);
    else
        userService.delete(req.params.id)
            .then(() => res.json({}))
            .catch(err => next(err));
}
