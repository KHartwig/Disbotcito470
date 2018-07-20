const botService = require('./bots.service');

<<<<<<< HEAD
module.exports = {
    attachBot,
    add,
    getById,
    getAllByUser,
    getAll,
    update,
    delete: _delete
};

// Finds the bot and attaches it to the req object
function attachBot(req, res, next){
    botService.getById(req.sessionUser, req.params.id, req.query.includeCommands)
        .then(function (bot) {
            if (!bot) res.sendStatus(404);
            else {
                req.bot = bot;
                next();
            }
        })
        .catch(err => next(err));
}
=======
// routes
router.post('/add', add);
router.get('/', getAllByUser);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);
router.put('/:id/start', toggleStatus);
router.put('/:id/stop', toggleStatus);

module.exports = router;
>>>>>>> 5ce65ded29bf764ceb238b7c9ddc8b8a81f92396

function add(req, res, next) {
    botService.create(req.sessionUser, req.body)
        .then((bot) => res.json(bot))
        .catch(err => next(err));
}

// Bot already got by attachBot middleware
function getById(req, res, next) {
    res.json(req.bot);
}

function getAllByUser(req, res, next){
    botService.getAllByUser(req.sessionUser, req.query.includeCommands)
        .then(bots => res.json(bots))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    botService.getAll(req.query.includeCommands)
        .then(bots => res.json(bots))
        .catch(err => next(err));
}

function update(req, res, next) {
    botService.update(req.bot, req.body)
        .then((bot) => res.json(bot))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    botService.delete(req.bot)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function toggleStatus(req, res, next) {
    botService.toggleStatus(req.params.id, req.user.sub)
        .then((bot) => res.json(bot))
        .catch(err => next(err));
}
