const express = require("express");
const router = express.Router();
const Offer = require("../models/Offer");

// Obtener todas las ofertas
router.get("/", async (req, res) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las ofertas", error });
  }
});

module.exports = router;
