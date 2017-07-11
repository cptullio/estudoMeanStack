const restful = require('node-restful')
const mongoose = restful.mongoose


const pagamentoSchema = new mongoose.Schema({
  valor: { type: Number, min: 0, required: true },
  dataPagamento: { type: Date },
  status: { type: String, required: false, uppercase: true,
  enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }

})

const associadoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  dataNascimento: { type: Date },
  endereco: { type: String },
  numero: { type: String },
  bairro: { type: String },
  cep: { type: String },
  pagamentos: [pagamentoSchema]

})
module.exports = restful.model('Associado', associadoSchema)