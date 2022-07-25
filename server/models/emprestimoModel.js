const { DataTypes } = require("sequelize");
const connection = require("../infra/database");
const associado = require("../models/associadoModel");
const emprestimo = connection.define(
  "emprestimo",
  {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nro_exemplar: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    codigo_assoc: {
      type: DataTypes.ENUM("gerente", "emprestimo"),
      allowNull: false,
    },
    data_emp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    data_devol: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "emprestimo",
    timestamps: false,
  }
);
emprestimo.belongsTo(associado, {
  foreignKey: "codigo_assoc",
  targetKey: "codigo",
});
emprestimo.sync();

module.exports = emprestimo;
