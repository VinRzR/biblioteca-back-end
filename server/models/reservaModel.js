const { DataTypes } = require("sequelize");
const connection = require("../infra/database");
const associado = require("../models/associadoModel");
const publicacao = require("../models/publicacaoModel");

const publicacao = connection.define(
  "publicacao",
  {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    isbn: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    codigo_assoc: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Iniciado", "Avisado", "Anulado"),
      allowNull: false,
    },
  },
  {
    tableName: "publicacao",
    timestamps: false,
  }
);
exemplar.belongsTo(publicacao, { foreignKey: "isbn", targetKey: "isbn" });
emprestimo.belongsTo(associado, {
  foreignKey: "codigo_assoc",
  targetKey: "codigo",
});
publicacao.sync();

module.exports = publicacao;
