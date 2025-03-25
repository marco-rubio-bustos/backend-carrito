require("dotenv").config(); // Cargar variables de entorno desde .env
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const User = require("./models/Users"); // Importar el modelo

// Middleware
app.use(express.json()); // Permite que el servidor reciba datos en formato JSON
app.use(cors()); // Habilita CORS para permitir que el frontend se comunique con el backend

// Conectar a MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((err) => console.error("❌ Error al conectar a MongoDB:", err));

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Hola desde el backend!");
});

///////////////////////////////////////

// Definir un esquema para loggedUser
const loggedUserSchema = new mongoose.Schema({
  login: String,
});

// Crear el modelo de loggedUser
const LoggedUser = mongoose.model("LoggedUser", loggedUserSchema);

// Ruta para guardar el valor 'login' en la base de datos
app.post("/api/loggedUser", async (req, res) => {
  try {
    const { login } = req.body;

    // Crear un nuevo documento de loggedUser
    const newUser = new LoggedUser({ login });

    // Guardar el documento en la base de datos
    await newUser.save();

    res.status(201).json({
      message: "Login guardado exitosamente" + newUser,
      user: newUser,
    });
  } catch (error) {
    console.error("Error al guardar el login:", error);
    res.status(500).json({ message: "Error al guardar el login" });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});

//////////////////////////////////////////////////////////////
// obtengo la data de MongoDB
const Product = require("./models/Product"); // Importar el modelo

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find(); // Buscar todos los productos en MongoDB
    res.json(products); // Enviar los datos en JSON
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error });
  }
});

// obtengo la data users de MongoDB

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find(); // Buscar todos los users en MongoDB

    // Transformar cada usuario para que tenga 'id' en lugar de '_id'
    const cleanedUsers = users.map((user) => {
      const userObj = user.toObject(); // Convertir a objeto plano
      userObj.id = userObj._id; // Copiar _id a id
      delete userObj._id; // Opcional: eliminar _id si no lo necesitas
      return userObj;
    });

    res.json(cleanedUsers); // Enviar usuarios transformados al frontend
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los users", error });
  }
});

/////////////////////////////////////////////
// prueba
const Offer = require("./models/Offer"); // Importar el modelo

app.get("/api/xxx", async (req, res) => {
  try {
    const Offerssss = await Offer.find(); // Buscar todos los Offers en MongoDB
    res.json(Offerssss); // Enviar los datos en JSON
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los Offers", error });
  }
});

/////////////////////////////////////////////
// Agrego al nuevo usurio a MongoDB
// /models/Users.js
app.post("/api/users", async (req, res) => {
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

    // Crear un nuevo usuario con los datos del formulario
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
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ message: "Error al crear el usuario" });
  }
});
