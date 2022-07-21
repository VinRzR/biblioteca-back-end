const reservaData = require("../data/reservaData");
const associadoData = require("../data/associadoData");
const publicacaoData = require("../data/publicacaoData");

exports.saveReserva = async function (data) {
  const reserva_assoc = await associadoData.getAssociado(data.codigo_assoc);
  if (!reserva_assoc) throw new Error("Associado não encontrado");

  const reserva_pub = await publicacaoData.getPublicacao(data.isbn);
  if (!reserva_pub) throw new Error("Publicacão não Encontrada");

  return reservaData.saveReserva(data);
};

exports.getReservas = async function () {
  return reservaData.getReservas(data);
};

exports.getReserva = async function (codigo) {
  return reservaData.getReserva(codigo);
};

exports.putReserva = async function (codigo, newData) {
  return reservaData.putReserva(codigo, newData);
};

exports.deleteReserva = async function (codigo) {
  return reservaData.deleteReserva(codigo);
};
