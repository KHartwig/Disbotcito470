const db = require('_helpers/db');
const FeaturedItem = db.FeaturedItem;

module.exports = {
    create,
    getAll,
    getById
};

async function create(fitemParam) {
    const featuredItem = new FeaturedItem(fitemParam);

    await featuredItem.save();
}

async function getAll() {
    return await FeaturedItem.find().select();
}

async function getById(id) {
    return await FeaturedItem.findById(id).select();
}