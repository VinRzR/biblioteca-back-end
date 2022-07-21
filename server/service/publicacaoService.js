const publicacaoData = require("../data/publicacaoData");

exports.savePublicacao = async function (data) {
  console.log(data);
  return publicacaoData.savePublicacao(data);
};

exports.getPublicacaos = async function () {
  return publicacaoData.getPublicacaosByTitle(data);
};

exports.getPublicacaos = async function () {
  return publicacaoData.getPublicacaos(data);
};

exports.getPublicacao = async function (codigo) {
  return publicacaoData.getPublicacao(codigo);
};

exports.putPublicacao = async function (codigo, newData) {
  return publicacaoData.putPublicacao(codigo, newData);
};

exports.deletePublicacao = async function (codigo) {
  return publicacaoData.deletePublicacao(codigo);
};
