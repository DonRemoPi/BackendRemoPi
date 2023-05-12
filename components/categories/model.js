const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const shopSchema = new Schema({
  categories: [categorySchema],
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;
