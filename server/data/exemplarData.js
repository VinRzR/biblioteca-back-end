const exemplar = require("../models/exemplarModel");

exports.saveExemplar = function (newExemplar) {
  return exemplar.create(newexemplar, { raw: true });
};

exports.getExemplars = function (numero, isbn) {
  return exemplar.findAll(
    { where: { numero: numero, isbn: isbn } },
    { raw: true }
  );
};

exports.getExemplar = function (numero, isbn) {
  return exemplar.findOne({ where: { numero, isbn } });
};

exports.putExemplar = function (numero, isbn, newData) {
  return exemplar.update(newData, { where: { numero: numero, isbn: isbn } });
};

exports.deleteExemplar = function (numero, isbn) {
  return exemplar.destroy({ where: { numero, isbn } });
};
