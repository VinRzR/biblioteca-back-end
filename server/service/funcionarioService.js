const funcionarioData = require("../data/funcionarioData");

exports.saveFuncionario = async function (data) {
  return funcionarioData.saveFuncionario(data);
};

exports.getFuncionarios = async function () {
  return funcionarioData.getFuncionarios(data);
};

exports.getFuncionario = async function (codigo) {
  return funcionarioData.getFuncionario(codigo);
};

exports.putFuncionario = async function (codigo, newData) {
  return funcionarioData.putFuncionario(codigo, newData);
};

exports.deleteFuncionario = async function (codigo) {
  return funcionarioData.deleteFuncionario(codigo);
};
