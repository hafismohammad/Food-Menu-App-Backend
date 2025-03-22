const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  categoryPath: [{ type: String }], 
  price: { type: Number, required: true },
  description: String,
  image: String,
}, { timestamps: true });

module.exports = mongoose.model('Menu', menuSchema);
