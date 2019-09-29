var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var boletoSchema = new Schema({
  banco: String,
});

var Boleto = mongoose.model("boleto", boletoSchema);

module.exports = Boleto;
