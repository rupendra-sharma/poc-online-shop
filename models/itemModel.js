const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  taxRate: {
    type: Number,
    required: true,
  },
  discountRate: {
    type: Number,
    default: 0,
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
