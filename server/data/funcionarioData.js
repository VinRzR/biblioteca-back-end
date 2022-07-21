const associado = require("../models/associadoModel");

exports.saveAssociado = function (newAssociado) {
  return associado.create(newAssociado, { raw: true });
};

exports.getAssociados = function () {
  return associado.findAll();
};

exports.getAssociado = function (codigo) {
  return associado.findOne({ where: { codigo } });
};

exports.putAssociado = function (codigo, newData) {
  return associado.update(newData, { where: { codigo } });
};

exports.deleteAssociado = function (codigo) {
  return associado.destroy({ where: { codigo } });
};
