const reservaData = require("../data/reservaData");
const associadoData = require("../data/associadoData");
const publicacaoData = require("../data/publicacaoData");
const emprestimoData = require("../data/emprestimoData");
const exemplarData = requite("../data/exemplarData");

exports.saveReserva = async function (data) {
  const reserva_assoc = await associadoData.getAssociado(data.codigo_assoc);
  if (!reserva_assoc) throw new Error("Associado não encontrado");

  const reserva_pub = await publicacaoData.getPublicacao(data.isbn);
  if (!reserva_pub) throw new Error("Publicacão não Encontrada");

  const emprestimos = emprestimoData.getEmprestimos();
  console.log(emprestimos);
  const exemplars = exemplarData.getExemplars();
  console.log(exemplars);
  return reservaData.saveReserva(data);
};

exports.getReservasByIsbn = async function (isbn) {
  return reservaData.getReservasByIsbn(isbn);
};

exports.anularReserva = async function (data) {
  const reserva = await reservaData.buscaReservaPorAssociado(
    data.isbn,
    data.codigo_assoc
  );

  if (reserva) {
    const reservaStatus = {
      status: "Anulado",
    };
    return reservaData.atualizarReserva(reserva.codigo, reservaStatus);
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
