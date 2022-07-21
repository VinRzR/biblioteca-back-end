const funcionarioData = require("../data/funcionarioData");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

exports.loginFuncionario = async function (data) {
  const existingFuncionario = await funcionarioData.getFuncionarioByEmail(
    data.email
  );
  if (!existingFuncionario) throw new Error("Authenticated failed");
  const passwordMatch = data.senha === existingFuncionario.senha;
  if (!passwordMatch) throw new Error("Authenticated failed");
  return "Senha Válida";
};
