const exemplarData = require("../data/exemplarData");
const publicacaoData = require("../data/publicacaoData");

exports.saveExemplar = async function (data) {
  const exemplar_pub = await publicacaoData.getPublicacao(data.isbn);
  if (!exemplar_pub) throw new Error("Publicacão não Encontrada");

  return exemplarData.saveExemplar(data);
};

exports.getExemplarsByIsbn = async function (isbn) {
  return exemplarData.getExemplarsByIsbn(isbn);
};

exports.buscaExemplaresDisponiveis = async function (isbn) {
  const exemplares = await exemplarData.buscaExemplarPorIsbn(isbn);
  const emprestimos = await emprestimoData.buscarEmprestimos(isbn);

  let exemplarLivre = [];
  exemplares.forEach((exemplar) => {
    let check = true;
    emprestimos.forEach((emprestimo) => {
      if (exemplar.numero === emprestimo.nro_exemplar) {
        check = false;
      }
    });
    if (check) {
      exemplarLivre.push(exemplar);
    }
  });

  return exemplarLivre;
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
