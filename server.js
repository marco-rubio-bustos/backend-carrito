require("dotenv").config(); // Cargar variables de entorno desde .env
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

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

const User = require("./models/Users"); // Importar el modelo

app.get("/api/users", async (req, res) => {
  try {
    const Users = await User.find(); // Buscar todos los Users en MongoDB
    res.json(Users); // Enviar los datos en JSON
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los Users", error });
  }
});

const Offer = require("./models/Offer"); // Importar el modelo

app.get("/api/xxx", async (req, res) => {
  try {
    const Offerssss = await Offer.find(); // Buscar todos los Offers en MongoDB
    res.json(Offerssss); // Enviar los datos en JSON
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los Offers", error });
  }
});
