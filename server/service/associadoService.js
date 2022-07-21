const associadoData = require("../data/associadoData");
const jwt = require("jsonwebtoken");
exports.saveAssociado = async function (data) {
  return associadoData.saveAssociado(data);
};

exports.getAssociados = async function () {
  return associadoData.getAssociados(data);
};

exports.getAssociado = async function (codigo) {
  return associadoData.getAssociado(codigo);
};

exports.putAssociado = async function (codigo, newData) {
  return associadoData.putAssociado(codigo, newData);
};

exports.deleteAssociado = async function (codigo) {
  return associadoData.deleteAssociado(codigo);
};

exports.loginAssociado = async function (data) {
  const existingAssociado = await associadoData.getAssociadoByEmail(data.email);
  if (!existingAssociado) throw new Error("Authenticated failed");
  const passwordMatch = data.senha === existingAssociado.senha;
  if (!passwordMatch) throw new Error("Authenticated failed");
  return "Senha Válida";
};
