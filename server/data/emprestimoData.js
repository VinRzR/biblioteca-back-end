const emprestimo = require("../models/emprestimoModel");

exports.saveEmprestimo = function (newEmprestimo) {
  return emprestimo.create(newEmprestimo, { raw: true });
};

exports.getEmprestimos = function (isbn) {
  return emprestimo.findAll({ where: { isbn } }, { raw: true });
};

exports.getEmprestimosByCodigoAssoc = function (codigo_assoc) {
  return emprestimo.findAll({ where: { codigo_assoc } }, { raw: true });
};

exports.getAllEmprestimos = function () {
  return emprestimo.findAll();
};

exports.getEmprestimo = function (isbn, nro_exemplar, codigo_assoc) {
  return emprestimo.findOne({
    where: { isbn, nro_exemplar, codigo_assoc },
    raw: true,
  });
};

exports.putEmprestimo = function (codigo, newData) {
  return emprestimo.update(newData, { where: { codigo } });
};

exports.deleteEmprestimo = function (codigo) {
  return emprestimo.destroy({ where: { codigo } });
};
