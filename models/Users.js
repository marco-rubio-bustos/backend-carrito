const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  username: String,
  password: String,
  permissions: String,
  name: String,
  avatar: String,
  lastname: String,
  email: String,
  code: String,
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
