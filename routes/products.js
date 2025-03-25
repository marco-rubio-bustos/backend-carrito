const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Obtener todos los productos
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error });
  }
});

module.exports = router;
