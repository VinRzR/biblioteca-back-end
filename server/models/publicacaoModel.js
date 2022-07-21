const { DataTypes } = require("sequelize");
const connection = require("../infra/database");

const publicacao = connection.define(
  "publicacao",
  {
    isbn: {
      type: DataTypes.TEXT,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    autor: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    editora: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "publicacao",
    timestamps: false,
  }
);
publicacao.sync();

module.exports = publicacao;
