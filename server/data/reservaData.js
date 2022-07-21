const reserva = require("../models/reservaModel");

exports.saveReserva = function (newReserva) {
  return reserva.create(newReserva, { raw: true });
};

exports.getReservas = function () {
  return reserva.findAll({ where: { codigo: codigo } }, { raw: true });
};

exports.getReserva = function (codigo) {
  return reserva.findOne({ where: { codigo } });
};

exports.putReserva = function (codigo, newData) {
  return reserva.update(newData, { where: { codigo } });
};

exports.deleteReserva = function (codigo) {
  return reserva.destroy({ where: { codigo } });
};
