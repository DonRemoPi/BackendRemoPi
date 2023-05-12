const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const empanadaSchema = new Schema({
  name: { type: String, required: true },
  toppings: [{ type: String }],
  price: { type: Number, required: true },
});

const model = mongoose.model('Empanada', empanadaSchema);
module.exports = model;