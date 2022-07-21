const funcionario = require("../models/funcionarioModel");

exports.saveFuncionario = function (newFuncionario) {
  return funcionario.create(newFuncionario, { raw: true });
};

exports.getFuncionarios = function () {
  return funcionario.findAll({ where: { codigo: codigo } }, { raw: true });
};

exports.getFuncionarioByEmail = function (email) {
  return funcionario.findOne({ where: { email } });
};
exports.getFuncionario = function (codigo) {
  return funcionario.findOne({ where: { codigo } });
};

exports.putFuncionario = function (codigo, newData) {
  return funcionario.update(newData, { where: { codigo } });
};

exports.deleteFuncionario = function (codigo) {
  return funcionario.destroy({ where: { codigo } });
};
