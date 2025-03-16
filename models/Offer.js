const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
  // define cómo serán los datos en la colección
  username: String,
  password: String,
  permissions: String,
  name: String,
  avatar: String,
  lastname: String,
  email: String,
  code: String,
});

const Offer = mongoose.model("as", OfferSchema);
// se crea el modelo basado en el esquema, siendo "as" como nombre de la colección
// OfferSchema define la estructura de los documentos en esa colección

module.exports = Offer;
