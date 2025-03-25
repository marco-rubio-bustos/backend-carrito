// models/LoggedUser.js
const mongoose = require("mongoose");

const loggedUserSchema = new mongoose.Schema({
  login: {
    type: String,
    required: [true, "El campo login es obligatorio"], // Campo requerido
  },
});

const LoggedUser = mongoose.model("LoggedUser", loggedUserSchema);

module.exports = LoggedUser;
