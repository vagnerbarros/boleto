var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var boletoSchema = new Schema({
  codigo: String,
  descricao: String,
  empresa: { type: Schema.Types.ObjectId, ref: "empresa", required: true }
});

var Boleto = mongoose.model("boleto", boletoSchema);

module.exports = Boleto;
