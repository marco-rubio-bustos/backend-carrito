const express = require("express");
const Product = require("../models/Product"); // Importa el modelo Product
const router = express.Router();

// Ruta para agregar un producto
router.post("/add", async (req, res) => {
  try {
    const { name, price, description } = req.body;

    // Verifica si los datos necesarios están presentes
    if (!name || !price || !description) {
      return res
        .status(400)
        .json({ message: "Todos los campos son requeridos" });
    }

    const newProduct = new Product({
      name,
      price,
      description,
    });

    await newProduct.save();
    res.status(201).json({ message: "Producto agregado", product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al agregar el producto" });
  }
});

module.exports = router;
