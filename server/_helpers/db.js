const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect(config.connectionString);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    FeaturedItem: require('../featured_items/featured_item.model'),
	Item: require('../items/item.model')
};