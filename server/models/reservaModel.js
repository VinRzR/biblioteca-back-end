const { DataTypes } = require("sequelize");
const connection = require("../infra/database");
const associado = require("../models/associadoModel");
const publicacao = require("../models/publicacaoModel");

const reserva = connection.define(
  "reserva",
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
    data: {
      type: DataTypes.DATE,
      defaultVlue: DataTypes.NOW,
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
reserva.belongsTo(publicacao, { foreignKey: "isbn", targetKey: "isbn" });
reserva.belongsTo(associado, {
  foreignKey: "codigo_assoc",
  targetKey: "codigo",
});
reserva.sync();

module.exports = reserva;
