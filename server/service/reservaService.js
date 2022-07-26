const reservaData = require("../data/reservaData");
const associadoData = require("../data/associadoData");
const publicacaoData = require("../data/publicacaoData");
const emprestimoData = require("../data/emprestimoData");
const exemplarData = require("../data/exemplarData");

exports.saveReserva = async function (data) {
  const emprestimos = await emprestimoData.getEmprestimos(data.isbn);
  const exemplares = await exemplarData.getExemplarsByIsbn(data.isbn);

  if (emprestimos.length < exemplares.length)
    throw new Error("Ainda existe exemplar disponível");

  const newReserva = data;
  return reservaData.saveReserva(newReserva);
};

exports.getReservasByIsbn = async function (isbn) {
  return reservaData.getReservasByIsbn(isbn);
};

exports.anularReserva = async function (data) {
  const reserva = await reservaData.getReservabyAssoc(
    data.isbn,
    data.codigo_assoc
  );

  if (reserva) {
    const reservaStatus = {
      status: "Anulado",
    };
    return reservaData.putReserva(reserva.codigo, reservaStatus);
  }

  throw "Reserva não encontrada";
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
