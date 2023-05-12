const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bebidaSchema = new Schema({
    name: { type: String, required: true },
    type: [{ type: String }],
    price: { type: Number, required: true },
});

const model = mongoose.model('Bebidas', bebidaSchema);
module.exports = model;