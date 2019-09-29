var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var boletoSchema = new Schema({
  carteira: { type: String, required: true },
  descricao: { type: String, required: true },
  valor: { type: Number, required: true },
  desconto: { type: Number },
  vencimento: { type: Date, required: true },
  emissao: { type: Date, required: true, default: Date.now() },
  destinatario: {
    nome: { type: String, required: true},
    cnpj_cpf: { type: String, required: true},
    telefone: { type: String, required: true },
    email: { type: String },
  },
  emissor: {
    
  }
});

var Boleto = mongoose.model("boleto", boletoSchema);

module.exports = Boleto;
