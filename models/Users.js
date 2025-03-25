// Almacena la estructura de la colección de usuarios en la base de datos

const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  id: String,
  username: String,
  password: String,
  permissions: Boolean,
  name: String,
  avatar: String,
  lastname: String,
  email: String,
  code: String,
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
