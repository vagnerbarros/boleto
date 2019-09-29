var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var boletoSchema = new Schema({
  banco: { type: String, required: true },
  linha_digitavel: { type: String, required: true },
  agencia_cedente: { type: String, required: true },
  nosso_numero: { type: String, required: true },
  codigo_barras: { type: String, required: true },
  carteira: { type: String, required: true },
  descricao: { type: String, required: true },
  valor: { type: Number, required: true },
  desconto: { type: Number },
  vencimento: { type: Date, required: true },
  emissao: { type: Date, required: true, default: Date.now() },
  instrucao: { type: String },

  sacado: {
    nome: { type: String, required: true},
    cnpj_cpf: { type: String, required: true},
    telefone: { type: String, required: true },
    email: { type: String },
  },
  cedente: {
    nome: { type: String, required: true },
    cnpj_cpf: { type: String, required: true },
    tipo: { type: String, required: true },
  }
});

var Boleto = mongoose.model("boleto", boletoSchema);

module.exports = Boleto;
