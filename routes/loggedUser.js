const express = require("express");
const router = express.Router();
const LoggedUser = require("../models/LoggedUser");

// Guardar un usuario logueado
router.post("/", async (req, res) => {
  try {
    const newUser = new LoggedUser(req.body);
    await newUser.save();
    res
      .status(201)
      .json({ message: "Login guardado exitosamente", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error al guardar el login", error });
  }
});

module.exports = router;
