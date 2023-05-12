const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
  name: { type: String, required: true },
  toppings: [{ type: String }],
  price: { type: Number, required: true },
  file: { type: String, required: true },
});


const model = mongoose.model('Pizza', pizzaSchema);
module.exports = model;