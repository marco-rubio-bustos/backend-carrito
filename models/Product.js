const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  mail: String,
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
