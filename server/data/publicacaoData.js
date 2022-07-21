const publicacao = require("../models/publicacaoModel");

exports.savePublicacao = function (newPublicacao) {
  return publicacao.create(newPublicacao, { raw: true });
};

exports.getPublicacaos = function (isbn) {
  return publicacao.findAll({ where: { isbn: isbn } }, { raw: true });
};

exports.getPublicacaosByTitle = function (nome) {
  return publicacao.findAll({ where: { nome: nome } }, { raw: true });
};

exports.getPublicacao = function (isbn) {
  return publicacao.findOne({ where: { isbn } });
};

exports.putPublicacao = function (isbn, newData) {
  return publicacao.update(newData, { where: { isbn } });
};

exports.deletePublicacao = function (isbn) {
  return publicacao.destroy({ where: { isbn } });
};
