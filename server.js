require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Importar rutas
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const offerRoutes = require("./routes/offers");
const loggedUserRoutes = require("./routes/loggedUser");

// Inicializar app y conectar a la base de datos
const app = express();
connectDB();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/offers", offerRoutes);
app.use("/api/loggedUser", loggedUserRoutes);

// Ruta de prueba
app.get("/", (req, res) => res.send("Hola desde el backend!"));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
