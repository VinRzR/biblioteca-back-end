const { DataTypes } = require("sequelize");
const connection = require("../infra/database");

const funcionario = connection.define(
  "funcionario",
  {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    senha: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    funcao: {
      type: DataTypes.ENUM("gerente", "funcionario"),
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "funcionario",
    timestamps: false,
  }
);
funcionario.sync();

module.exports = funcionario;
