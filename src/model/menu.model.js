const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    categoryPath: [{ type: String }],
    price: { type: Number, required: true },
    description: String,
    image: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Menu", menuSchema);
