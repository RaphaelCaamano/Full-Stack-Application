const mongoose = require('mongoose');

// Define the Item schema
const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Item model
const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
