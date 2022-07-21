const associadoData = require("../data/associadoData");

exports.saveAssociado = async function (data) {
  console.log(data);
  return associadoData.saveAssociado(data);
};

exports.getAssociados = async function () {
  return associadoData.getAssociados(data);
};

exports.geteAssociado = async function (codigo) {
  return associadoData.getAssociado(codigo);
};

exports.putAssociado = async function (codigo, newData) {
  return associadoData.putAssociado(codigo, newData);
};

exports.deleteAssociado = async function (codigo) {
  return associadoData.deleteAssociado(codigo);
};
