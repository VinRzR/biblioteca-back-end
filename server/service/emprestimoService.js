const emprestimoData = require("../data/emprestimoData");
const associadoData = require("../data/associadoData");

exports.saveEmprestimo = async function (data) {
  const emprestimo_assoc = await associadoData.getAssociado(data.codigo_assoc);
  if (!emprestimo_assoc) throw new Error("Associado não encontrado");

  return emprestimoData.saveEmprestimo(data);
};

exports.getEmprestimos = async function () {
  return emprestimoData.getEmprestimos(data);
};

exports.getEmprestimo = async function (codigo) {
  return emprestimoData.getEmprestimo(codigo);
};

exports.putEmprestimo = async function (codigo, newData) {
  return emprestimoData.putEmprestimo(codigo, newData);
};

exports.deleteEmprestimo = async function (codigo) {
  return emprestimoData.deleteEmprestimo(codigo);
};
