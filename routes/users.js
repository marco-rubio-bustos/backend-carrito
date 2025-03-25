const express = require("express");
const router = express.Router();
const User = require("../models/Users");

// Obtener todos los usuarios
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los users", error });
  }
});

// Crear un nuevo usuario
router.post("/", async (req, res) => {
  try {
    const {
      username,
      password,
      permissions,
      name,
      avatar,
      lastname,
      email,
      code,
    } = req.body;

    const newUser = new User({
      username,
      password,
      permissions,
      name,
      avatar,
      lastname,
      email,
      code,
    });
    // Guardar en la base de datos
    await newUser.save();
    res
      .status(201)
      .json({ message: "Usuario creado exitosamente", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el usuario", error });
  }
});

module.exports = router;
