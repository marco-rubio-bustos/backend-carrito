require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product"); // Importa el modelo

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((err) => console.error("❌ Error al conectar a MongoDB:", err));

const insertarProductos = async () => {
  try {
    const productosEjemplo = [
      {
        id: 1,
        name: "Laptop",
        price: 1200,
        description: "Laptop potente para desarrollo",
      },
      {
        id: 2,
        name: "Teclado Mecánico",
        price: 150,
        description: "Teclado mecánico RGB",
        mail: "asd@asd.cl",
      },
    ];

    await Product.insertMany(productosEjemplo);
    console.log("✅ Productos insertados!");

    mongoose.connection.close(); // Cerrar la conexión después de insertar
  } catch (error) {
    console.error("❌ Error al insertar productos:", error);
    mongoose.connection.close();
  }
};

insertarProductos();
