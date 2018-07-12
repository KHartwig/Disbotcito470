const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    itemname: { type: String, required: true },
    category: { type: String, required: true },
    quantity: Number,
    ownerId: { type: Schema.Types.ObjectId, required: true },
    createdDate: { type: Date, default: Date.now },
    status: String

});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Item', schema);

