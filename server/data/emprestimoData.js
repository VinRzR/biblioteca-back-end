const emprestimo = require("../models/emprestimoModel");

exports.saveEmprestimo = function (newEmprestimo) {
  return emprestimo.create(newEmprestimo, { raw: true });
};

exports.getEmprestimos = function () {
  return emprestimo.findAll({ where: { codigo: codigo } }, { raw: true });
};

exports.getEmprestimo = function (codigo) {
  return emprestimo.findOne({ where: { codigo } });
};

exports.putEmprestimo = function (codigo, newData) {
  return emprestimo.update(newData, { where: { codigo } });
};

exports.deleteEmprestimo = function (codigo) {
  return emprestimo.destroy({ where: { codigo } });
};
