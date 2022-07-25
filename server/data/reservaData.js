const reserva = require("../models/reservaModel");

exports.saveReserva = function (newReserva) {
  return reserva.create(newReserva, { raw: true });
};

exports.getReservasByIsbn = function (isbn) {
  return reserva.findAll({ where: { isbn } });
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
