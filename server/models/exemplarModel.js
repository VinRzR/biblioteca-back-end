const { DataTypes } = require("sequelize");
const connection = require("../infra/database");
const publicacao = require("../models/publicacaoModel");
const exemplar = connection.define(
  "exemplar",
  {
    numero: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.TEXT,
      primaryKey: true,
      allowNull: false,
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "exemplar",
    timestamps: false,
  }
);
//ARRUMAR
publicacao.hasMany(exemplar, { foreignKey: "isbn" });
exemplar.belongsTo(publicacao, { foreignKey: "isbn", targetKey: "isbn" });
exemplar.sync();

module.exports = exemplar;
