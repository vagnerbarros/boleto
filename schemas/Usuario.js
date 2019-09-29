var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
  nome: String,
  login: String,
  senha: String
});

var Usuario = mongoose.model("usuario", usuarioSchema);

module.exports = Usuario;
