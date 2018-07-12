const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: { type: Number, unique: true, required: true },
    name: { type: String, required: true },
    category: { type:String, required: true },
    imageUrl: { type: String, default: "" }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('FeaturedItem', schema);