const exemplarData = require("../data/exemplarData");
const publicacaoData = require("../data/publicacaoData");

exports.saveExemplar = async function (data) {
  const exemplar_pub = await publicacaoData.getPublicacao(data.isbn);
  if (!exemplar_pub) throw new Error("Publicacão não Encontrada");

  return exemplarData.saveExemplar(data);
};

exports.getExemplars = async function () {
  return exemplarData.getExemplars(data);
};

exports.getExemplar = async function (codigo) {
  return exemplarData.getExemplar(codigo);
};

exports.putExemplar = async function (codigo, newData) {
  return exemplarData.putExemplar(codigo, newData);
};

exports.deleteExemplar = async function (codigo) {
  return exemplarData.deleteExemplar(codigo);
};
