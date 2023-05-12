const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postreSchema = new Schema({
  name: { type: String, required: true },
  toppings: [{ type: String }],
  price: { type: Number, required: true },
});

const model = mongoose.model('Postre', postreSchema);
module.exports = model;